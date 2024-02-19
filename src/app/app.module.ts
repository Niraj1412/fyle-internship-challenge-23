import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
=======
import { OwlModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 72e878f57935db1c226c598d4f3072b13d958ef7

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    OwlModule,
>>>>>>> 72e878f57935db1c226c598d4f3072b13d958ef7
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
