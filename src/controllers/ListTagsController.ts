import { Request, Response } from 'express'
import { ListTagsService } from '../services/ListTagsService'

class ListTagsController {
    public handle = async (req: Request, res: Response): Promise<Response> => {
        const listTagsService = new ListTagsService()

        const tags = await listTagsService.execute()

        return res.json(tags)
    }
}

export { ListTagsController }