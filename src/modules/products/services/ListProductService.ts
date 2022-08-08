import { getCustomRepository } from "typeorm";
import RedisCache from '@shared/cache/RedisCache'
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

class ListProductService {
    public async execute(): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductRepository);

        const redisCache = new RedisCache();

        // const products = await productsRepository.find();

         let products = await redisCache.recover<Product[]>(
            'api-vendas-PRODUCT_LIST',
        );
        
        if (!products) {
            products = await productsRepository.find();

            await redisCache.save('api-vendas-PRODUCT_LIST', products);
        }
      
        return products;
    }
}

export default ListProductService;