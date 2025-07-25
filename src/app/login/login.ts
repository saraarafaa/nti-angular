import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../services/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginfrom:FormGroup;
  constructor(private fb:FormBuilder,private userService:User,private router:Router){
    this.loginfrom=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  login() {
    const { username, password } = this.loginfrom.value;
    const loggeduser = this.userService.login(username, password);
    if(loggeduser){
      this.userService.setlogeduser(loggeduser);
      this.router.navigate(['/posts']);
    } else {
      console.log("invalid user name or password")
    }
  }
}
