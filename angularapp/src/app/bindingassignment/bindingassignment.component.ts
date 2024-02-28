import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingassignment',
  templateUrl: './bindingassignment.component.html',
  styleUrls: ['./bindingassignment.component.css']
})
export class BindingassignmentComponent implements OnInit {

  countryName : string = 'India';
  firstName : string = 'Ridvika';
  greet : string = '';
  constructor() { }

  ngOnInit(): void {
  }


  onNameChange(event:any){
    //console.log(event);
    //let val = event.target.value;
    //console.log(val);
    //this.countryName = val;
    this.countryName = event.target.value;
    
    
  }
  onclick(event:any){
    this.firstName=event.target.value;

  }

  getValue(){
    console.log(val);
    
  }

}
