import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { CardUserComponent } from './card-user/card-user.component';
import { CardPostComponent } from './card-post/card-post.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'users/:id',
    component: CardUserComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: CardPostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardUserComponent,
    UserComponent,
    HomeComponent,
    CardPostComponent,
    PostsComponent,
    HeaderComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
