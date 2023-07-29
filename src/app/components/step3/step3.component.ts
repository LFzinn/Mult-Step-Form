import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit{

  formData = this.formService.getForm();

  constructor(private formService: FormService, private router: Router) {}

  ngOnInit(): void {
      this.formData.get('Option1')?.setValue('Online Service')
      this.formData.get('Option2')?.setValue('Larger Storage')
      this.formData.get('Option3')?.setValue('Customizable Profile')
  }


  next(){
    if(this.formService.getForm().valid){
      this.router.navigate(['/step4'])
    }
  }


}
