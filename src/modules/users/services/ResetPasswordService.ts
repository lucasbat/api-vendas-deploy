import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { isAfter, addHours } from 'date-fns'
import { hash } from 'bcryptjs';
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UsersTokensRepository from "../typeorm/repositories/UserTokensRepository";

interface IRequest {
    token: string;
    password: string; 
}

class CreatePasswordService {
    public async execute({ token, password }: IRequest): Promise<void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRespository = getCustomRepository(UsersTokensRepository);

        const userToken = await userTokenRespository.findByToken(token);

        if(!userToken) {
            throw new AppError('User Token does not exists.');
        }

        const user = await usersRepository.findById(userToken.user_id) 
       
        if(!user) {
            throw new AppError('User does not exists.');
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token expired.');
        }

        user.password = await hash(password, 8);
        await usersRepository.save(user);
    }
}

export default CreatePasswordService