import { Component } from '@angular/core';
import { GithubService } from './github.service';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module27';
  users: any;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    // this.githubService.getUsers().subscribe(data => console.log(data));

    this.githubService.getUsers().subscribe(data => (this.users = data));
  }
}
