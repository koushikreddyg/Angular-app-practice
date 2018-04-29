import { HomeComponent } from './home/home.component';
import { PostsService } from './posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// const Routes= [
//   {path:'', component:HomeComponent ,pathMatch: 'full'},
//   {path:'posts', component: PostsComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'posts',component: PostsComponent},
      {path: 'contact/:username', component: ContactComponent},
      {path: '**' ,component:NotFoundComponent}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
