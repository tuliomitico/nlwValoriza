import { Request, Response } from 'express'
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService'

class ListUserReceiveController {
    public handle = async (req: Request,res: Response): Promise<Response> => {
        const listUserReceiveService = new ListUserReceiverComplimentsService()
        const { user_id } = req

        const compliments = await listUserReceiveService.execute(user_id)

        return res.json(compliments)
    }
}

export { ListUserReceiveController }