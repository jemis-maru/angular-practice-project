import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName = "";
  userEmail = "";
  isFormSubmit = false;

  submitForm(){
    if(this.userEmail && this.userName){
      this.isFormSubmit = true;
    }
  }

}
