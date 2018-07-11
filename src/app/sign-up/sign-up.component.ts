import {Component, ViewEncapsulation, DoCheck } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormFieldMessage } from '../shared/models/FormFieldMessage';
import {ValidateEmailIsAvailable} from '../shared/validators/async-email.validator';
import {ValidateUsernameIsAvailable} from '../shared/validators/async-username.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements DoCheck {

  userForm: FormGroup;
  usernameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  usernameMessage: FormFieldMessage = null;
  emailMessage: FormFieldMessage = null;
  passwordMessage: FormFieldMessage = null;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.usernameCtrl = new FormControl(
      '',
      {
        'updateOn': 'blur',
        'validators': Validators.required,
        'asyncValidators': ValidateUsernameIsAvailable.createValidator(authenticationService)
      }
    );
    this.emailCtrl = new FormControl(
      '',
      {
        'updateOn': 'blur',
        'validators': [Validators.required, Validators.email],
        'asyncValidators': ValidateEmailIsAvailable.createValidator(authenticationService)
      }
    );
    this.passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.passwordCtrl.statusChanges.subscribe(next => {
      this.passwordMessage = this.getPasswordMessage();
      console.log(next, this.passwordMessage);
    });

    this.userForm = new FormGroup({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  register(userForm) {
    this.usernameCtrl.markAsDirty();
    this.emailCtrl.markAsDirty();
    this.passwordCtrl.markAsDirty();
    this.authenticationService.register(userForm.value).subscribe(
      token => {
        this.authenticationService.setCurrentUserToken(token);
        this.router.navigate(['/evenements']);
      },
      error => console.log(error) // @TODO: traiter l'erreur
    );
  }

  private getUsernameMessage(): FormFieldMessage {
    if (this.usernameCtrl.dirty) {
      if (this.usernameCtrl.hasError('required')) {
        return {
          type: 'error',
          message: `Vous devez saisir un nom d'utilisateur`
        };
      }
      if (this.usernameCtrl.status === 'PENDING') {
        return {
          type: 'pending'
        };
      }
      if (this.usernameCtrl.hasError('usernameIsAvailable')) {
        return {
          type: 'error',
          message: `Ce nom d'utilisateur n'est pas disponible`
        };
      }
      if (this.usernameCtrl.status === 'VALID') {
        return {
          type: 'success',
          message: `Ce nom d'utilisateur est disponible`
        };
      }
    }

    return null;
  }

  private getEmailMessage(): FormFieldMessage {
    if (this.emailCtrl.dirty) {
      if (this.emailCtrl.hasError('required')) {
        return {
          type: 'error',
          message: `Vous devez saisir une adresse email`
        };
      }
      if (this.emailCtrl.hasError('email')) {
        return {
          type: 'error',
          message: `Mauvais format d'adresse email`
        };
      }
      if (this.emailCtrl.status === 'PENDING') {
        return  {
          type: 'pending'
        };
      }
      if (this.emailCtrl.hasError('emailIsAvailable')) {
        return {
          type: 'error',
          message: `Cette adresse email est déjà enregistrée`
        };
      }
      if (this.emailCtrl.status === 'VALID') {
        return {
          type: 'success'
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
    }
    return null;
  }

  ngDoCheck() {
    this.usernameMessage = this.getUsernameMessage();
    this.emailMessage = this.getEmailMessage();
    this.passwordMessage = this.getPasswordMessage();
  }
}
