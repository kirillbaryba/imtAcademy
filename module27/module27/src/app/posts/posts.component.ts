import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from '../card-user/card-user.service';
import { Post } from '../card-post/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post;
  username: string;
  constructor(private route: ActivatedRoute, private cardUserService: CardUserService) {}

  ngOnInit() {
    this.route.subscribe(({ id }) =>
      this.cardUserService.getUser(id).subscribe((post: Post) => {
        this.post = post;
        this.cardUserService.getUser(post.userId).subscribe((user: any) => (this.username = user.name));
      })
    );
  }
}
