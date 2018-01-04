import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlaComponent } from './bla/bla.component';
import { BlubComponent } from './blub/blub.component';
import { DynamicComponentModule } from '@trzewior/ng-dynamic';

@NgModule({
    declarations: [
        BlaComponent,
        BlubComponent
    ],
    exports: [
        BlaComponent,
        BlubComponent
    ]
})
export class SharedModule { }

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        DynamicComponentModule.forRoot({
            imports: [SharedModule]
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
