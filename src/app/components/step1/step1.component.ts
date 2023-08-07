import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component {

  formData = this.formService.getForm();

  constructor(private formService : FormService, private router : Router){}






  next(){
    if(this.formService.getForm().valid) {
      this.router.navigate(['/step2'])
    }
  }






}
