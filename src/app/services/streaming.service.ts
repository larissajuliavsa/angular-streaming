import { Injectable } from '@angular/core';
import { StreamingConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js'

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  spotifyAPI: Spotify.SpotifyWebApiJs = null

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

  acessToken(token: string) {
    this.spotifyAPI.setAccessToken(token);
    localStorage.setItem('token',token)
  }
}
