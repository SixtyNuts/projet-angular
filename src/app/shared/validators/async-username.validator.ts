import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ValidateUsernameIsAvailable {
  static createValidator(authenticationService: AuthenticationService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return authenticationService.isUsernameAvailable(control.value)
        .pipe(
          map(isAvailable => isAvailable ? null : { 'usernameIsAvailable': true })
        )
      ;
    };
  }
}
