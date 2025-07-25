import { Component, Input } from '@angular/core';
import { Iuser } from '../models/user.model';
import { User } from '../services/user';

@Component({
  selector: 'app-date-user',
  standalone: false,
  templateUrl: './date-user.html',
  styleUrl: './date-user.css'
})
export class DateUser {
 constructor(private userService:User){}
   @Input() userid!:number;
  @Input()date_create !:Date;
  user !:Iuser
  ngOnInit():void{
    this.user=this.userService.getUserById(this.userid)!;
  }
}

