import axios from 'axios';

export const getUserProfile = async (username:string) =>{
  const response = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`);
  return response.data;
}

export type GithubProfile = {
  login: string;
  id: number;
  nodeID: string;
  avatarURL: string;
  gravatarID: string;
  url: string;
  htmlURL: string;
  followersURL: string
  followingURL: string;
  gistsURL: string;
  starredURL: string;
  subscriptionsURL: string;
  organizationsURL: string;
  reposURL: string;
  eventsURL: string;
  receivedEventsURL: string;
  type: string;
  siteAdmin: boolean;
  name: string;
  company: string;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: Date;
  updatedAt: Date;
}