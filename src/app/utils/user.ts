import { IUser } from "../interfaces/IUser.interface";

export function userData(user: SpotifyApi.CurrentUsersProfileResponse):IUser {
  return {
    id: user.id,
    name: user.display_name,
    imageURL: user.images[1].url
  }
}
