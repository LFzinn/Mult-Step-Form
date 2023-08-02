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
  prices = this.formService.getPrices();

  constructor(private formService: FormService, private router: Router) {}



  totalPlans() {

    if(this.formData.value.selectedOption == 'Arcade'){
      return this.prices.price1;
    }else if (this.formData.value.selectedOption == 'Advanced'){
      return this.prices.price2;
    }else if (this.formData.value.selectedOption == 'Pro') {
      return this.prices.price3
    }else {
      return 0
    }
  }

  totalAddOns() {
    let total = 0;

    const options = ['Option1', 'Option2', 'Option3'];
    for (const option of options) {
      if (this.formData.value[option] === 'Online Service') {
        total += this.prices.addOn1;
      } else if (this.formData.value[option] === 'Larger Storage') {
        total += this.prices.addOn2;
      } else if (this.formData.value[option] === 'Customizable Profile') {
        total += this.prices.addOn3;
      }
    }

    return total;
  }



  selectedAddOn = this.totalAddOns();
  selectedPlan = this.totalPlans();

  all = this.selectedAddOn+ this.selectedPlan


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
