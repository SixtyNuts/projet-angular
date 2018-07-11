import { Component, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormFieldMessage } from '../shared/models/FormFieldMessage';
import {UserCredentials} from '../shared/models/UserCredentials';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  usernameMessage: FormFieldMessage = null;
  passwordMessage: FormFieldMessage = null;

  sentCredentials: UserCredentials|null = null;

  constructor(private authenticationService: AuthenticationService, private router: Router) {

    this.usernameCtrl = new FormControl(
      '',
      {
        'updateOn': 'blur',
        'validators': Validators.required
      }
    );
    this.usernameCtrl.statusChanges.subscribe(next => {
      this.usernameMessage = this.getUsernameMessage();

      if (next === 'VALID' && this.passwordCtrl.hasError('invalidCredentials')) {
        this.passwordCtrl.setErrors(null);
      }
    });

    this.passwordCtrl = new FormControl(
      '',
      {
        'validators': [Validators.required, Validators.minLength(6)],
        'updateOn': 'blur'
      }
    );
    this.passwordCtrl.statusChanges.subscribe(next => {
      this.passwordMessage = this.getPasswordMessage();

      if (next === 'VALID' && this.usernameCtrl.hasError('invalidCredentials')) {
        this.usernameCtrl.setErrors(null);
      }
    });

    this.userForm = new FormGroup({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
    this.userForm.statusChanges.subscribe(
      () => {
        this.usernameMessage = this.getUsernameMessage();
        this.passwordMessage = this.getPasswordMessage();
      }
    );
  }

  private getUsernameMessage(): FormFieldMessage {
    if (this.usernameCtrl.dirty) {
      if (this.usernameCtrl.hasError('required')) {
        return {
          type: 'error',
          message: `Vous devez saisir un nom d'utilisateur ou une adresse email`
        };
      }
      if (this.userForm.hasError('invalidCredentials')) {
        return {
          type: 'error',
          message: 'Identifiants invalides'
        };
      }
    }

    return null;
  }

  private getPasswordMessage(): FormFieldMessage {
    if (this.passwordCtrl.dirty) {
      if (this.passwordCtrl.hasError('required')) {
        return {
          type: 'error',
          message: `Vous devez saisir un mot de passe`
        };
      }
      if (this.passwordCtrl.hasError('minlength')) {
        return {
          type: 'error',
          message: `Votre mot de passe doit faire 6 caractères minimum`
        };
      }
      if (this.userForm.hasError('invalidCredentials')) {
        return {
          type: 'error',
          message: 'Identifiants invalides'
        };
      }
    }
    return null;
  }

  private currentValuesMatchesInvalidCredentials() {
    if (this.sentCredentials == null) {
      return;
    }

    return (this.usernameCtrl.value === this.sentCredentials.username)
      && (this.passwordCtrl.value === this.sentCredentials.password);
  }

  login(userForm) {
      this.usernameCtrl.markAsDirty();
      this.passwordCtrl.markAsDirty();

      if (this.userForm.valid) {
        this.sentCredentials = userForm.value;
        this.authenticationService.login(userForm.value).subscribe(
          token => {
            this.authenticationService.setCurrentUserToken(token);
            this.router.navigate(['/evenements']);
          },
          error => {
            console.log(error);
            this.userForm.setErrors({ invalidCredentials: true });
            this.usernameCtrl.setErrors({ invalidCredentials: true });
            this.passwordCtrl.setErrors({ invalidCredentials: true });
          }
        );
      }
  }
}
