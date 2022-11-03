import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit, AfterContentInit {

  @ViewChild('userTypeRef', { static: true }) userTypeInput: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.userTypeInput);
  }

  public userName: string = "";
  public userEmail: string = "";
  public userType: string = "Seller";
  public isFormSubmit: boolean = false;
  

  public userList: Array<string> = ['Admin', 'Seller', 'Buyer'];
  public selectedUser:string = "Seller";

  public submitForm(): void{
    if(this.userEmail && this.userName){
      this.isFormSubmit = true;
    }
  }

  public getSelectedValue(value: string): void{
    this.userType = value;
  }

}
