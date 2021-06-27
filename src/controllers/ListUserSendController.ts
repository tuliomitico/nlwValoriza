import { Request, Response } from 'express'
import { ListUserSenderComplimentsService } from '../services/ListUserSenderComplimentsService'

class ListUserSendController {
    public handle = async (req: Request,res: Response): Promise<Response> => {
        const listUserSendService = new ListUserSenderComplimentsService()
        const { user_id } = req

        const compliments = await listUserSendService.execute(user_id)

        return res.json(compliments)
    }
}

export { ListUserSendController }