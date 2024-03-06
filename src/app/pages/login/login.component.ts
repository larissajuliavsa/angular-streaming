import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamingService } from 'src/app/services/streaming.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private streamingService: StreamingService, private router: Router) {}

  ngOnInit(): void {
    this.setToken()
  }

  openPageLogin() {
    window.location.href = this.streamingService.getLoginUrl()
  }

  setToken() {
    const token = this.streamingService.getTokenCallback()
    if (token) {
      this.streamingService.setToken(token)
      this.router.navigate(['/player'])
    }
  }
}
