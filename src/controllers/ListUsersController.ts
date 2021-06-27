import { Request, Response } from 'express'
import { ListUsersService } from '../services/ListUsersService'

class ListUsersController {
    public handle = async (req: Request, res: Response): Promise<Response> => {
        const listUsersService = new ListUsersService()

        const users = await listUsersService.execute()

        return res.json(users)
    }
}

export { ListUsersController }