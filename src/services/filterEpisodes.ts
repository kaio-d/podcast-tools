import { ResponsePodcastModel } from "../models/responsePodcastModel";
import { podcastRepository } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (podcastName: string): Promise<ResponsePodcastModel> => {
  let responseFormat: ResponsePodcastModel = {
    statusCode: 0,
    body: [],
  };
  const data = await podcastRepository(podcastName);

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data

  return responseFormat;
};
