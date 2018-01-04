import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = '...this will be replaced...';

  text = 'hello';

  updateText(event) {
    this.text = event.target.value;
  }

  compileStringToAngularAndInsert(template: string) {
    this.content = template;
  }
}
