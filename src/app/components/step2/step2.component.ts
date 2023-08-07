import { Component, OnInit } from '@angular/core';

import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit{
  formData = this.formService.getForm();
  prices = this.pricesService.getPrices();

  constructor(private formService: FormService, private router: Router, private pricesService : PricesService) {}

  ngOnInit(): void {
    this.formData.get('selectedOption')?.setValue('Advanced')
}



  next(){
    if(this.formService.getForm().valid) {
      this.router.navigate(['/step3'])
    }
  }

  back(){
    this.router.navigate([''])
  }




 changePrice() {
  this.pricesService.togglePrice();
 }







}
