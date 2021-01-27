import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LicenceComponent } from './licence/licence.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'login', component: LoginComponent
},{ path: 'regist', component: ClientRegisterComponent
},{ path: 'forgot', component: ForgotPasswordComponent
},{ path: 'returntologin', component: LoginComponent
},{ path: 'getstarted', component: CompanyRegistrationComponent
},{ path: 'settings', component: SideNavComponent
},{ path: 'profile', component: ProfileComponent
},{ path: 'subscription', component: SubscriptionComponent
},{ path: 'faq', component: FaqComponent }, { path: 'terms', component: TermsComponent },{ path: 'licence', component: LicenceComponent },{ path: 'privacy', component: PrivacyComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
