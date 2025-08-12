import { podcastRepository } from "../repositories/podcastsRepository";

export const listEpisodesService = async () => {
  const data = await podcastRepository();

  return data;
};
