export const environment = {
    production: true
  };


export const StreamingConfiguration = {
  clientId: 'a9369b9a93a34ebd882d4caca5b13fcd',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative"
  ]
}
