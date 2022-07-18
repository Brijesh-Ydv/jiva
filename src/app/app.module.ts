import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './admin-onboard/dashboard/dashboard.component';
import { HeaderComponent } from './admin-onboard/header/header.component';
import { SidenavComponent } from './admin-onboard/sidenav/sidenav.component';
import { Listview2Component } from './admin-onboard/listview2/listview2.component';
import { Formview2Component } from './admin-onboard/formview2/formview2.component';
import { UserComponent } from './admin-onboard/user/user.component';
import { RoListViewComponent } from './admin-onboard/ro-list-view/ro-list-view.component';
import { RoAddComponent } from './admin-onboard/ro-add/ro-add.component';
import { DdmListViewComponent } from './admin-onboard/ddm-list-view/ddm-list-view.component';
import { DdmAddComponent } from './admin-onboard/ddm-add/ddm-add.component';
import { PfaListViewComponent } from './admin-onboard/pfa-list-view/pfa-list-view.component';
import { PfaAddComponent } from './admin-onboard/pfa-add/pfa-add.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RoDashboardComponent } from './ro-onboard/ro-dashboard/ro-dashboard.component';
import { RoHeaderComponent } from './ro-onboard/ro-header/ro-header.component';
import { RoSidenavComponent } from './ro-onboard/ro-sidenav/ro-sidenav.component';
import { RoListViewPfaComponent } from './ro-onboard/ro-list-view-pfa/ro-list-view-pfa.component';
import { RoAddPfaComponent } from './ro-onboard/ro-add-pfa/ro-add-pfa.component';
import { RoProfileComponent } from './ro-onboard/ro-profile/ro-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    Listview2Component,
    Formview2Component,
    UserComponent,
    RoListViewComponent,
    RoAddComponent,
    DdmListViewComponent,
    DdmAddComponent,
    PfaListViewComponent,
    PfaAddComponent,
    ForgotPasswordComponent,
    RoDashboardComponent,
    RoHeaderComponent,
    RoSidenavComponent,
    RoListViewPfaComponent,
    RoAddPfaComponent,
    RoProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
