import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

    onInput(event){
    console.log(event.target);
  };

    outInput(event){
    console.log('Output event!');
  }


}
