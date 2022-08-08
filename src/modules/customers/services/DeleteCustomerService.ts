import AppError from "@shared/errors/AppError";
import CustomersRepository from "@modules/customers/typeorm/repositories/CustomersRepository";
import { getCustomRepository } from "typeorm";

interface IResquest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IResquest): Promise<void> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.");
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
