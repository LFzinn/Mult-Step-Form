import { Component } from '@angular/core';

import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  formData = this.formService.getForm();

  constructor(private formService : FormService){}
}
