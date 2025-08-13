import { podcastRepository } from "../repositories/podcastsRepository"

export const serviceFilterEpisodes = async(podcastName: string) => {
    const data = await podcastRepository(podcastName)

    return data;
}