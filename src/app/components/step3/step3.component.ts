import { Component,OnInit } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';
import { PricesService } from 'src/app/services/prices.service';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit{

  formData = this.formService.getForm();
  prices = this.pricesService.getPrices();
  all = this.priceService.getTotal();

  constructor(private formService: FormService, private router: Router, private pricesService: PricesService,
    private priceService : PricesService)
    {
      this.formData.get('Option1')?.setValue(false)
      this.formData.get('Option2')?.setValue(false)
      this.formData.get('Option3')?.setValue(false)
    }



  ngOnInit(): void {
  }

  updateOption1() {
    if(this.formData.get('Option1')?.value === !this.formData.get('Option1')?.value) {
      this.formData.get('Option1')?.setValue(true);
    }
  }



  updateOption2() {
    if(this.formData.get('Option2')?.value === !this.formData.get('Option2')?.value) {
      this.formData.get('Option2')?.setValue(true);
    }
  }

  updateOption3() {
    if(this.formData.get('Option3')?.value === !this.formData.get('Option3')?.value) {
      this.formData.get('Option3')?.setValue(true);
    }
  }




  next(){
    if(this.formService.getForm().valid){
      this.router.navigate(['/step4'])
    }
  }

  back(){
    this.router.navigate(['/step2'])
  }


}
