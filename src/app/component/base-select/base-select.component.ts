import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-select',
  templateUrl: './base-select.component.html',
  styleUrls: ['./base-select.component.scss']
})
export class BaseSelectComponent implements OnInit {

  @Input('options') users: Array<string> = [];
  @Input('selectedOption') currentSelectedUser: string = "";

  @Output() changeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedUserAccess(): void{
    this.changeSelected.emit(this.currentSelectedUser);
  }
}
