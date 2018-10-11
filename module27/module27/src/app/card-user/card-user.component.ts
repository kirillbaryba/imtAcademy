import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from './card-user.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private cardUserService: CardUserService) {}

  ngOnInit() {
    // this.route.params.subscribe(({ user }) => (this.user = user));
    this.route.params.subscribe(({ id }) => this.cardUserService.getUser(id).subscribe(user => (this.user = user)));
  }
}
