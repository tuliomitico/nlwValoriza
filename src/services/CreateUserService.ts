import { getCustomRepository } from "typeorm"

import { User } from "../entities/User"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string
    email: string
    admin?: boolean
}

class CreateUserService {
    async execute({name,email,admin}: IUserRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepositories)

        if (!email) {
            throw new Error("Email incorrext!")
        }

        const userAlreadyExists = await usersRepository.findOne({where: { email }})

        if (userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export { CreateUserService }