import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewDirectiveDirective } from './new-directive.directive';
import { NewPipePipe } from './new-pipe.pipe';
import { ChangeTextDirective } from './change-text.directive';
//import { SqrtPipe } from './app.sqrt';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //SqrtPipe,
    AppComponent,
    NewComponentComponent,
    NewDirectiveDirective,
    NewPipePipe,
    ChangeTextDirective,
   // RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
