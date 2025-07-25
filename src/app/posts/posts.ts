import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/post.model';
import { Post } from '../services/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {
  showform: boolean = false;
  toggleForm() {
    this.showform = !this.showform;
  }

  posts: Ipost[] = [];
  postForm: FormGroup;

  constructor(private postService: Post, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      imgurl: ['', Validators.required],
      userid: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.posts = this.postService.getposts();
  }

  addpost() {
    if (this.postForm.valid) {
      const newpost: Ipost = {
        id: 0,
        date: new Date(),
        title: this.postForm.value.title,
        body: this.postForm.value.body,
        userid: this.postForm.value.userid,
        imgurl: this.postForm.value.imgurl,
        like: false,
        likes: 0,
        comments: []
      };
      this.postService.addpots({ ...newpost });
      this.posts = this.postService.getposts();
      this.postForm.reset();
      this.showform = false;
    }
  }

  removepost(id: number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getposts();
  }
  likecounter(post: Ipost) {
    post.like = true;
    post.likes = ++post.likes;
  }
  comment: string = "";
  addcomment(post: Ipost) {
    post.comments.push(this.comment);
    this.comment = "";
  }
}

