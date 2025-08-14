import { ResponsePodcastModel } from "../models/responsePodcastModel";
import { podcastRepository } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const listEpisodesService = async (): Promise<ResponsePodcastModel> => {
  let responseFormat: ResponsePodcastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await podcastRepository();

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};
