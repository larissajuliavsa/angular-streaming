import { Injectable } from '@angular/core';
import { StreamingConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js'
import { IUser } from '../interfaces/IUser.interface';
import { userData } from '../utils/user';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  spotifyAPI: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor() {
    this.spotifyAPI = new Spotify();
  }

  getLoginUrl() {
    const authEndpoint = `${StreamingConfiguration.authEndpoint}?`;
    const clientId = `client_id=${StreamingConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${StreamingConfiguration.redirectUrl}&`
    const scopes = `scope=${StreamingConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`
    return authEndpoint + clientId + redirectUrl + scopes + responseType
  }

  getTokenCallback() {
    if (!window.location.hash) {
      return '';
    }

    const hash = window.location.hash.substring(1).split('&')
    const token = hash[0].split('=')[1]

    return token;
  }

  setToken(token: string) {
    this.spotifyAPI.setAccessToken(token);
    localStorage.setItem('token',token)
  }

  async getUser() {
    const data = await this.spotifyAPI.getMe()
    this.user = userData(data)
  }

  async initializeUser() {
    if (this.user) {
      return true
    }

    const token = localStorage.getItem('token');
    if (!token) {
      return false
    }

    try {
      this.setToken(token)
      await this.getUser()
      if (this.user) return true

    } catch(e) {
      return false
    }
    return false
  }

}
