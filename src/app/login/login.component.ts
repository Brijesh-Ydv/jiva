import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ToasterService } from '../services/toaster.service'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  checkoutForm!: FormGroup;

  public active: boolean = false;

  public display: boolean = false;
  public displaypassword: boolean = false;
  public displayotp: boolean = false;
  captcha: any;
  captchaError: any;

  constructor(
    private auth: AuthService,
    private toast: ToasterService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  SubmitLogin(): void {
    this.spinner.show();
    if (this.checkoutForm.valid) {
      if (this.captcha) {
        this.auth.loginUser(this.checkoutForm.value).subscribe((user: any) => {
          if (user.status === 200) {
            // console.log(user.results.role);
            if (user.results.role === 'applicant') {
              if (user.results.status === true) {
                localStorage.setItem('username', user.results.username);
                localStorage.setItem('role', user.results.role);
                localStorage.setItem('user', user.results.email);
                localStorage.setItem('userdata', JSON.stringify(user.results));
                setTimeout(() => {
                  // this.router.navigate(['/applicant']);
                  window.location.href = "/applicant";
                }, 1500);
              } else {
                setTimeout(() => {
                  this.toast.showError(
                    'Oops! E-mail is not activated. Kindly check your e-mail to activate your account.'
                  );
                  // this.router.navigate(['/login']);
                  this.spinner.hide();
                  window.location.href = '/login';
                }, 1500);
              }
            } else if (user.results.role === 'coapplicant') {
              if (user.results.status === true) {
                localStorage.setItem('username', user.results.username);
                localStorage.setItem('user', user.results.email);
                localStorage.setItem('role', user.results.role);
                localStorage.setItem('userdata', JSON.stringify(user.results));
                setTimeout(() => {
                  // this.router.navigate(['/calibrator-dashboard']);
                  window.location.href = '/calibrator-dashboard';
                  console.log('Calibrator login');
                }, 1500);
              } else {
                setTimeout(() => {
                  this.toast.showError(
                    'Oops! E-mail is not activated. Kindly check your e-mail to activate your account.'
                  );
                  window.location.href = '/login';
                  this.spinner.hide();
                }, 1500);
              }
            } else if (user.results.role === 'assessor') {
              if (user.results.status === true) {
                localStorage.setItem('username', user.results.username);
                localStorage.setItem('user', user.results.email);
                localStorage.setItem('role', user.results.role);
                localStorage.setItem('userdata', JSON.stringify(user.results));
                setTimeout(() => {
                  // this.router.navigate(['/assessors']);
                  window.location.href = '/assessors';
                  console.log('Assessors login');
                }, 1500);
              } else {
                setTimeout(() => {
                  this.toast.showError(
                    'Oops! E-mail is not activated. Kindly check your e-mail to activate your account.'
                  );
                  window.location.href = '/login';
                  this.spinner.hide();
                }, 1500);
              }
            } else {
              localStorage.setItem('username', user.results.username);
              localStorage.setItem('user', user.results.email);
              localStorage.setItem('role', user.results.designation);
              localStorage.setItem('userdata', JSON.stringify(user.results));
              setTimeout(() => {
                // this.router.navigate(['/']);
                window.location.href = '/dashboard';
                console.log('Super Admin');
              }, 1500);
            }
          } else if (user.status === 404) {
            this.toast.showError('Oops! Credentials entered are not valid!');
            this.spinner.hide();
          }
          if (user.status === 401) {
            this.toast.showError('Oops! Credentials entered are not valid!');
            this.spinner.hide();
          }
        });
      } else {
        this.toast.showError('Please verify that you are not a robot.');
        this.captchaError = 'Please verify that you are not a robot.';
        this.spinner.hide();
      }
    } else {
      this.toast.showError('Oops! Please enter Credentials !');
      this.spinner.hide();
    }
  }

  ngOnInit(): void {

  }






}
