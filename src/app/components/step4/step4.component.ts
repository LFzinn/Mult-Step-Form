import { Component } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component {
  formData = this.formService.getForm();

  constructor(private formService: FormService, private router: Router) {}


  change(){
    this.formData.get('selectedOption')?.setValue('');
    this.router.navigate(['/step2'])
  }


  cancel1(){
    this.formData.get('Option1')?.setValue('');
  }

  cancel2(){
    this.formData.get('Option2')?.setValue('');
  }

  cancel3(){
    this.formData.get('Option3')?.setValue('');
  }



}
