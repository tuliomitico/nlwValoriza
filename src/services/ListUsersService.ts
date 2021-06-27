
import { getCustomRepository } from 'typeorm'
import { classToPlain } from 'class-transformer'

import { User } from '../entities/User'
import { UsersRepositories } from '../repositories/UsersRepositories'

class ListUsersService {
    public execute = async () => {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const users = await usersRepositories.find()

        return classToPlain(users)
    }
}

export { ListUsersService }