import { Podcast } from "./podcastModel";

export interface ResponsePodcastModel {
    statusCode: number,
    body: Podcast[]
}