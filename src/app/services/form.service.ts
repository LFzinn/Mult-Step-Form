import { Injectable } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      phone:[null, Validators.required],
      selectedOption:[null],
      Option1:[''],
      Option2:[''],
      Option3:[''],
    });
  }

  getForm():FormGroup {
    return this.formData;
  }


}
