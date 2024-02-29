import { Injectable } from '@angular/core';
import { StreamingConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor() {}

  getLoginUrl() {
    const authEndpoint = `${StreamingConfiguration.authEndpoint}?`;
    const clientId = `client_id=${StreamingConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${StreamingConfiguration.redirectUrl}&`
    const scopes = `scope=${StreamingConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`
    return authEndpoint + clientId + redirectUrl + scopes + responseType
  }
}
