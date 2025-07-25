import { Injectable } from '@angular/core';
import { Ipost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class Post {
  private posts:Ipost[]=[
      {
      title: 'Angular Basics',
      body: 'Programing in Angular is fun and exciting. Let\'s learn the basics.',
      id:1,
      userid:1,
      date:new Date,
      imgurl:"https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/hed-new-programming-languages.jpg",
      like:false,
      likes:0,
      comments:[]

    },
    {
      title: 'Learning Programming',
      body: 'Thinking in programming is essential for mastering Angular.',
      id:2,
      userid:2,
      date: new Date,
      imgurl:"https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg",
      like:true,
      likes:0,
      comments:[]

    },
     {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:3,
      userid:3,
      date:new Date,
      imgurl:"https://www.okaz.com.sa/uploads/images/2023/07/03/2129963.jpg",
      like:false,
      likes:0,
      comments:[]

    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:4,
      userid:4,
      date: new Date,
      imgurl:"https://www.okaz.com.sa/uploads/images/2023/07/03/2129963.jpg",
      like:true,
      likes:0,
      comments:[]

    },
     {
      title: 'Angular ',
      body: 'Many Frameworks are available, but Angular is the best for large applications.',
      id:5,
      userid:5,
      date:new Date,
      imgurl:"https://burncode.org/storage/dSW9CSfmuMSePLKeGguJG9TGnIf7To-metacHJvZ3JhbW1pbmctbGFuZ3VhZ2VzLWJ1cm5jb2RlLmpwZw==-.jpg",
      like:false,
      likes:0,
      comments:[]

    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:6,
      userid:6,
      date: new Date,
      imgurl:"https://www.okaz.com.sa/uploads/images/2023/07/03/2129963.jpg",
      like:true,
      likes:0,
      comments:[]

    },
     {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:7,
      userid:7,
      date:new Date,
      imgurl:"https://www.okaz.com.sa/uploads/images/2023/07/03/2129963.jpg",
      like:false,
      likes:0,
      comments:[]

    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id:8,
      userid:8,
      date: new Date,
      imgurl:"https://www.okaz.com.sa/uploads/images/2023/07/03/2129963.jpg",
      like:true,
      likes:0,
      comments:[]

    },
  ];
getposts():Ipost[]{
  return this.posts;
}
addpots(post:Ipost):void{
  this.posts.push(post);
}

deletePost(id:number):void{
  this.posts = this.posts.filter(p=>p.id!==id);

}
updatePost(updatapost:Ipost){
  const index = this.posts.findIndex(p=>p.id===updatapost.id);
  this.posts[index]={...updatapost};
}
}
