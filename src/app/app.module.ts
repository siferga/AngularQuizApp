import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {SignInService} from "./services/sign-in.service";
import {SignUpService} from "./services/sign-up.service";
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component'; //Ajouter le support HTTP Client

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SignInComponent,
    SignUpComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent,
    //Ajouter le support HTTP Client
  ],
  providers: [UserService, SignInService, SignUpService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
