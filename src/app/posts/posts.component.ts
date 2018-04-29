import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any=[];
  constructor( private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllPosts()
    .subscribe((posts)=>{
      this.posts=posts
    })
  }

  createPost(){
    this.postService.createPost()
    .subscribe(post=>{
      this.posts.splice(0,0,post);
    })
  }
  deletePost(){
    this.postService.deletePost()
    .subscribe(posts=>{
      console.log('post value is ',posts)
    })

  }

}
