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

  public userName: string = "";
  public userEmail: string = "";
  public userType: string = "";
  public isFormSubmit: boolean = false;
  

  public userList: Array<string> = ['Admin', 'Seller', 'Buyer'];
  public selectedUser:string = "rony";

  public submitForm(): void{
    if(this.userEmail && this.userName){
      this.isFormSubmit = true;
    }
  }

  public getSelectedValue(value: string): void{
    this.userType = value;
  }

}
