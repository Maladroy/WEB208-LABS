import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = "../../assets/logo.png"

  constructor(
    private authService: AuthService,
  ) {
  }



  logout() {
    this.authService.logout()
  }
}
