import { getCustomRepository } from 'typeorm'

import { Tag } from '../entities/Tag'
import { TagsRepositories } from '../repositories/TagsRepositories'

class CreateTagService {
    public execute = async (name: string): Promise<Tag> => {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new Error("Incorrect name!")
        }

        const tagAlreadyExists = await tagsRepositories.findOne({ name })

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!")
        }

        const tag = tagsRepositories.create({name})
        await tagsRepositories.save(tag)

        return tag
    }
}

export { CreateTagService }