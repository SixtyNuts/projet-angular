import {Component, Input, OnInit} from '@angular/core';
import {FormFieldMessage} from '../../models/FormFieldMessage';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-field-message',
  templateUrl: './form-field-message.component.html',
  styleUrls: ['./form-field-message.component.scss']
})
export class FormFieldMessageComponent implements OnInit {

  @Input() formFieldMessage: FormFieldMessage;
  @Input() formFieldControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
