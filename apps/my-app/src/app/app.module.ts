import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyPieComponent } from '@my/my-pie';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyPieComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
