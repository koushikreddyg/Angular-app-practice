import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import axios from 'axios';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {

   }
   getAllPosts(){
     return this.http.get(`/postsData`)
     .map(posts=> {
      return posts
     })
     
   }
   createPost(){
     return this.http.post('/postsData',
     { body: 'koushik body', title:'Playing cricket'})
     .map(posts=> {
      return posts
     })
   }

   deletePost(){
    //  this.http.delete("https://jsonplaceholder.typicode.com/posts"+"/"+99)
    //  .subscribe(res=>{
    //    console.log(res)
    //  })
     return this.http.delete(`/postsData/${11}`)
     .map(posts=>{
       return posts
     })
   }

}
