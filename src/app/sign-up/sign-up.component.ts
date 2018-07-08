import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent {

  userForm: FormGroup;
  usernameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  isUsernameAvailable: null | boolean;
  isEmailAvailable: null | boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {

    this.isUsernameAvailable = null;
    this.isEmailAvailable = null;

    const emailIsAvailable = (control: AbstractControl) => {
      return this.authenticationService.isEmailAvailable(control.value)
        .pipe(
          tap(isAvailable => this.isEmailAvailable = isAvailable)
        );
    };

    const usernameIsAvailable = (control: AbstractControl) => {
      return this.authenticationService.isUsernameAvailable(control.value)
        .pipe(
          tap(isAvailable => this.isUsernameAvailable = isAvailable)
        );
    };

    const usernameControlOptions: AbstractControlOptions = {
      'updateOn': 'blur',
      'validators': Validators.required,
      'asyncValidators': usernameIsAvailable
    };
    this.usernameCtrl = new FormControl('', usernameControlOptions);
    this.usernameCtrl.valueChanges
      .subscribe(newValue => this.isUsernameAvailable = null);

    const emailControlOptions: AbstractControlOptions = {
      'updateOn': 'blur',
      'validators': [Validators.required, Validators.email],
      'asyncValidators': emailIsAvailable
    };
    this.emailCtrl = new FormControl('', emailControlOptions);

    this.passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);

    this.userForm = new FormGroup({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  hasEmailMessage() {
    const control = this.emailCtrl;
    return (
      (control.dirty && control.hasError('required'))
      || (control.dirty && control.hasError('email'))
      || this.isEmailAvailable === false);
  }

  hasUsernameMessage() {
    const control = this.usernameCtrl;
    return (
      (control.dirty && control.hasError('required'))
      || this.isUsernameAvailable === true
      || this.isUsernameAvailable === false);
  }

  hasPasswordMessage() {
    const control = this.passwordCtrl;
    return (
          (control.dirty && control.hasError('required'))
      ||  (control.dirty && !control.hasError('required') && control.hasError('minLength'))
    );
  }

  register(userForm) {
      this.usernameCtrl.markAsDirty();
      this.emailCtrl.markAsDirty();
      this.passwordCtrl.markAsDirty();
      this.authenticationService.register(userForm.value).subscribe(
        user => {
          this.authenticationService.setCurrentUser(user)
          this.router.navigate(['/evenements'])
        },
        error => console.log(error) // @TODO: traiter l'erreur
      );
  }
}
