import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IResquest {
    user_id: string;
}

class ShowProfileService {
    public async execute({ user_id }: IResquest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(user_id);

        if (!user){
           throw new AppError('user not found.');
        }
        
        return user;
    }
}

export default ShowProfileService;