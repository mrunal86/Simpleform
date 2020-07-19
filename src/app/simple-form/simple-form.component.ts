import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  simpleform:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.simpleform=new FormGroup({
        'Name': new FormControl(null,[
          Validators.required,
          Validators.minLength(3)
        ]),
        'funfact': new FormControl(null,[
            Validators.required,
            Validators.minLength(10)
        ])
      });
  }
  get name() { return this.simpleform.get('Name'); }
  get funfact() { return this.simpleform.get('funcfact'); }   
}
