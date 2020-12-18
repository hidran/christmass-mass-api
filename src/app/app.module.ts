import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// service
import { MessaService } from './services/messa.service';
import { FedeleService } from './services/fedele.service';
import { AuthxxService } from './services/authxx.service';
// utente
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { MessaComponent } from './components/messa/messa.component';
import { MessaDetailComponent } from './components/messa-detail/messa-detail.component';

import { MesseComponent } from './components/messe/messe.component';
import { FedeliComponent } from './components/fedeli/fedeli.component';
import { FedeleDataComponent } from './components/fedele-data/fedele-data.component';
import { FedeleDetailComponent } from './components/fedele-detail/fedele-detail.component';
import { FedeleComponent } from './components/fedele/fedele.component';
import { LoginComponent } from './components/login/login.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoAppComponent } from './components/info-app/info-app.component';
import { MessaDataComponent } from './components/messa-data/messa-data.component';
import { InfoApp1Component } from './components/info-app1/info-app1.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessaComponent,
    MessaDetailComponent,
    MesseComponent,
    FedeliComponent,
    FedeleDataComponent,
    FedeleDetailComponent,
    FedeleComponent,
    LoginComponent,
    JumbotronComponent,
    FooterComponent,
    MessaDataComponent,
    InfoAppComponent,
    InfoApp1Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessaService, FedeleService, AuthxxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
