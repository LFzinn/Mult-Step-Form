import { Injectable } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formData: FormGroup;
  router: any;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
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


  private prices = {
    price1 : 9,
    price2 : 12,
    price3 : 15,
    addOn1 : 1,
    addOn2 : 2,
    addOn3 : 2,
    isMonthly: true,
    monthly : true,
  };


  togglePrice() {
    this.prices.isMonthly = !this.prices.isMonthly;

    if(!this.prices.isMonthly) {
      this.prices.price1 = 90
      this.prices.price2 = 120
      this.prices.price3 = 150
      this.prices.addOn1 = 10
      this.prices.addOn2 = 20
      this.prices.addOn3 = 20
      this.prices.monthly = false;
    } else if(this.prices.isMonthly) {
      this.prices.price1 = 9
      this.prices.price2= 12
      this.prices.price3 = 15
      this.prices.addOn1 = 1
      this.prices.addOn2 = 2
      this.prices.addOn3 = 2
      this.prices.monthly = true;
    };
  }



  getPrices(){
    return this.prices
  }





}
