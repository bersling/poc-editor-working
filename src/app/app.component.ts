import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private content: string = '...this will be replaced...';
    
    compileStringToAngularAndInsert(template: string) {
        this.content = template;
    }
}