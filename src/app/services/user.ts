import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User {
   private users: Iuser[] = [
    {
      id: 1,
      name: "Salma Ahmed",
      email: "salma@example.com",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 2,
      name: "Malak Ali",
      email: "malak@example.com",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "356"
    },
    {
      id: 3,
      name: "Ahmed Tarek",
      email: "ahmedt@example.com",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 4,
      name: "Sara Khaled",
      email: "sara@example.com",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "123"
    },
    {
      id: 5,
      name: "Laila Hassan",
      email: "laila@example.com",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 6,
      name: "Habiba Ali",
      email: "habiba@example.com",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "356"
    },
    {
      id: 7,
      name: "Rawan Tarek",
      email: "rawan@example.com",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      email: "ahmedh@example.com",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "356"
    },
  ];
    getAllUsers(): Iuser[] {
      return this.users;
    }
    getUserById(id:number):Iuser|undefined{
       return this.users.find(user => user.id === id);
    }
    addUser(user:Iuser){
      this.users.push(user);
    }
     updateUser(updatedUser: Iuser){
     const index = this.users.findIndex(user => user.id === updatedUser.id);
      this.users[index] = { ...updatedUser };
     }
    deleteUser(id: number){
      this.users= this.users.filter(u=>u.id!==id);
    }
    login(usernameOrEmail: string, password: string): Iuser | undefined {
      return this.users.find(u => (u.name === usernameOrEmail || u.email === usernameOrEmail) && u.password === password);
    }
    loggedinuser:Iuser|null=null;
    setlogeduser(user:Iuser){
      this.loggedinuser=user
      localStorage.setItem('user',JSON.stringify(user));
    }
    getlogeduser():Iuser{
      return this.loggedinuser||JSON.parse(localStorage.getItem('user')!);
    }
    logout(){
      this.loggedinuser=null;
      localStorage.removeItem('user');
    }

}
