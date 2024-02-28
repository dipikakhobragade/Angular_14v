import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  firstName: string ='Ridvika';
  lastName: string ='Bhele';

  employee ={
    id: '101',
    name: 'jack'
  }


  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg';

  isDisabled: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  getFirstNameAndLastName(){
    return this.firstName+ '' +this.lastName;
  }

  disableButton(){
    this.isDisabled=true;
  }

}
