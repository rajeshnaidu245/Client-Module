import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FirstComponent } from './first/first.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { LicenceComponent } from './licence/licence.component';
import { PrivacyComponent } from './privacy/privacy.component';





@NgModule({
  declarations: [
    AppComponent,
    
    LandPageComponent,
    
    LoginComponent,
    
    ForgotPasswordComponent,
    
    ClientRegisterComponent,
    
    NavbarComponent,
    
    SideNavComponent,
    
    ProfileComponent,
    
    SubscriptionComponent,
    
    FaqComponent,
    
    TermsComponent,
    
    LicenceComponent,
    
    PrivacyComponent,
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
