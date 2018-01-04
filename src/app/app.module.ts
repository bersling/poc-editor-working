import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GapComponent} from './gap/gap.component';
import {TaskComponent} from './task/task.component';
import {DynamicComponentModule} from '@trzewior/ng-dynamic';
import {AudioComponent} from './audio/audio.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    GapComponent,
    AudioComponent
  ],
  exports: [
    GapComponent,
    AudioComponent
  ]
})
export class SharedModule {
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    DynamicComponentModule.forRoot({
      imports: [SharedModule]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
