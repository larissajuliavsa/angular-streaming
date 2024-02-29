import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { StreamingService } from "../services/streaming.service";

export const checkUserLoginGuard = () => new Promise(async (res, rej) => {
  const streamingService = inject(StreamingService);
  const router = inject(Router);

  const notAuthenticated = () => {
    localStorage.clear();
    router.navigateByUrl('/login');
    rej('User is not authenticated!');
    return false;
  }

  const token = localStorage.getItem('token');
  if (!token) {
    return notAuthenticated();
  }

  const userLoggedIn = await streamingService.initializeUser();
  
  if (userLoggedIn) {
    res(true)
  } else {
    res(notAuthenticated)
  }

  return '';
})
