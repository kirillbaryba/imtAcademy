import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../github.service';
import { CardUserService } from '../card-user/card-user.service';
import { Post } from './Post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  post: Post;
  username: string;
  comments: any;

  constructor(
    private route: ActivatedRoute,
    private cardUserService: CardUserService,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) =>
      this.cardUserService.getPost(id).subscribe((post: Post) => {
        this.post = post;
        this.cardUserService.getUser(post.authorId).subscribe((user: any) => (this.username = user.name));
        this.githubService.getPostsForUser(post.id).subscribe(comments => (this.comments = comments));
      })
    );
  }
}
