import { Component } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  formData = this.formService.getForm();

  constructor(private formService: FormService, private router: Router) {}

  next(){
    if(this.formService.getForm().valid){
      this.router.navigate(['/step3'])
    }
  }

}
