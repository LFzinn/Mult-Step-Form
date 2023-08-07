import { Injectable } from '@angular/core';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  formData = this.formService.getForm();
  private prices = {
    price1: 9,
    price2: 12,
    price3: 15,
    addOn1: 1,
    addOn2: 2,
    addOn3: 2,
    isMonthly: true,
    monthly: true,
  };


  constructor(private formService: FormService) { }




  togglePrice() {
    this.prices.isMonthly = !this.prices.isMonthly;

    if (!this.prices.isMonthly) {
      this.prices.price1 = 90;
      this.prices.price2 = 120;
      this.prices.price3 = 150;
      this.prices.addOn1 = 10;
      this.prices.addOn2 = 20;
      this.prices.addOn3 = 20;
      this.prices.monthly = false;
    } else {
      this.prices.price1 = 9;
      this.prices.price2 = 12;
      this.prices.price3 = 15;
      this.prices.addOn1 = 1;
      this.prices.addOn2 = 2;
      this.prices.addOn3 = 2;
      this.prices.monthly = true;
    }
  }

  getPrices() {
    return this.prices;
  }


  private totalPlans() {
    if (this.formData.value.selectedOption == 'Arcade') {
      return this.prices.price1;
    } else if (this.formData.value.selectedOption == 'Advanced') {
      return this.prices.price2;
    } else if (this.formData.value.selectedOption == 'Pro') {
      return this.prices.price3;
    } else {
      return 0;
    }
  }



  totalAddOns() {
    let total = 0;

    if (this.formData.value.Option1 === true) {
      total += this.prices.addOn1;
    }

    if (this.formData.value.Option2 === true) {
      total += this.prices.addOn2;
    }

    if (this.formData.value.Option3 === true ) {
      total += this.prices.addOn3;
    }

    return total;
  }



   updateTotal() {
    const selectedAddOn = this.totalAddOns();
    const selectedPlan = this.totalPlans();
    return selectedAddOn + selectedPlan;
  }


  getTotal() {
    return this.updateTotal();
  }
}
