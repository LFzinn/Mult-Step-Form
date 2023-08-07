import { Component, OnInit } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { PricesService } from 'src/app/services/prices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  formData = this.formService.getForm();
  prices = this.pricesService.getPrices();
  all = this.pricesService.getTotal();


  constructor(private formService: FormService, private router: Router, private pricesService: PricesService) {
    if(this.formData.value.Option1 === true) {
      this.formData.get('Option1')?.setValue('Online Service')
    }
    if(this.formData.value.Option2 === true) {
      this.formData.get('Option2')?.setValue('Larger Storage')
    }
    if(this.formData.value.Option3 === true) {
      this.formData.get('Option3')?.setValue('Customizable Profile')
    }


  }



  ngOnInit() {}


  change(){
    this.formData.get('selectedOption')?.setValue('');
    this.router.navigate(['/step2'])
  }


  cancel1(){
    this.formData.get('Option1')?.setValue('');
    this.all -= this.prices.addOn1;

  }


  cancel2(){
    this.formData.get('Option2')?.setValue('');
    this.all -= this.prices.addOn2;
  }

  cancel3(){
    this.formData.get('Option3')?.setValue('');
    this.all -= this.prices.addOn3;
  }


  back() {
    this.router.navigate(['/step3'])
  }

  confirm() {
    this.router.navigate(['/step5'])
  }


}
