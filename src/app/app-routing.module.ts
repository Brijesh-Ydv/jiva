import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './admin-onboard/dashboard/dashboard.component';
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
import { RoProfileComponent } from './ro-onboard/ro-profile/ro-profile.component';
import { RoListViewPfaComponent } from './ro-onboard/ro-list-view-pfa/ro-list-view-pfa.component';
import { RoAddPfaComponent } from './ro-onboard/ro-add-pfa/ro-add-pfa.component';
import { PfaDashboardComponent } from './pfa-onboard/pfa-dashboard/pfa-dashboard.component';
import { PfaProfileComponent } from './pfa-onboard/pfa-profile/pfa-profile.component';
import { AddPfaUserComponent } from './pfa-onboard/add-pfa-user/add-pfa-user.component';
import { ListViewPfaUserComponent } from './pfa-onboard/list-view-pfa-user/list-view-pfa-user.component';
import { AddFormLandsComponent } from './pfa-onboard/add-form-lands/add-form-lands.component';
import { ListViewFormLandsComponent } from './pfa-onboard/list-view-form-lands/list-view-form-lands.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list2', component: Listview2Component },
  { path: 'form2', component: Formview2Component },
  { path: 'admin-profile', component: UserComponent },
  { path: 'ro-list', component: RoListViewComponent },
  { path: 'ro-add', component: RoAddComponent },
  { path: 'ddm-list', component: DdmListViewComponent },
  { path: 'ddm-add', component: DdmAddComponent },
  { path: 'pfa-list', component: PfaListViewComponent },
  { path: 'pfa-add', component: PfaAddComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'ro-dashboard', component: RoDashboardComponent },
  { path: 'ro-profile', component: RoProfileComponent },
  { path: 'ro-list-view-pfa', component: RoListViewPfaComponent },
  { path: 'ro-add-pfa', component: RoAddPfaComponent },
  { path: 'pfa-dashboard', component: PfaDashboardComponent },
  { path: 'pfa-profile', component: PfaProfileComponent },
  { path: 'add-pfa-user', component: AddPfaUserComponent },
  { path: 'list-view-pfa-user', component: ListViewPfaUserComponent },
  { path: 'add-form-lands', component: AddFormLandsComponent },
  { path: 'list-view-form-lands', component: ListViewFormLandsComponent },
  { path: 'reset-password', component: ResetPasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
