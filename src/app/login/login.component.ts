import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { PizzaAppService } from '../pizza-app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: PizzaAppService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.login(this.user).subscribe(result => this.gotoUserList(), error=> alert("Email or password is wrong")
    );
  }

  gotoUserList() {
    this.userService.currentemail = this.user.email;
    this.userService.isloggedin = true
    this.router.navigate(['/viewpizza']);
  }

}
