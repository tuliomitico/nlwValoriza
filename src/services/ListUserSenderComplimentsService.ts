import { getCustomRepository } from 'typeorm'
import { Compliments } from '../entities/Compliments'

import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListUserSenderComplimentsService {
    public execute = async (user_id: string): Promise<Compliments[]> => {
        const usersRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = usersRepositories.find({ where: { user_sender: user_id }, relations: ['userSender','userReceiver','tag'] })

        return compliments
    }
}

export { ListUserSenderComplimentsService }