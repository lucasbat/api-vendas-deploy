import Customer from "@modules/customers/typeorm/entities/Customer";
import {  EntityRepository, Repository } from "typeorm";

@EntityRepository(Customer) 
class CustomerRepository extends Repository<Customer> {
    public async findByName(name: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                name,
            },
        });

        return customer;
    }
    public async findById(id: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                id,
            },
        });

        return customer;
    }
    public async findByEmail(email: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                email,
            },
        });

        return customer;
    }
}

export default CustomerRepository;