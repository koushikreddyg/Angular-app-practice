import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form;
  constructor(fb: FormBuilder){
      this.form=fb.group({
        account: fb.group({
          firstName:['',[
            Validators.required,
            Validators.minLength(4),
            UsernameValidators.cannotContainSpace
          ],[UsernameValidators.shouldBeUnique]],
          lastName: ['',Validators.required]
        })
      })
  }

  // form=new FormGroup({

  //     account: new FormGroup({
  //       firstName: new FormControl('',[
  //         Validators.required,
  //         Validators.minLength(4),
  //         UsernameValidators.cannotContainSpace
  //       ],[UsernameValidators.shouldBeUnique]),
  //       lastName: new FormControl('',Validators.required)
  //     })
   
      

  // })

  login(){
    this.form.setErrors({
      invalidLogin: true
    })
  }

  getValue(){
    console.log(this.f_name);
  };

  get f_name(){
    return this.form.get('account.firstName')
  }

  get l_name(){
    return this.form.get('account.lastName')
  }

  // constructor(private router: Router, ) { }

  ngOnInit() {
  }
  // counter: number=0
  // onCountChange(value){
  //   this.counter=this.counter+value
  // }
  // redirect(val){
  //   console.log(val)
  //   this.router.navigate(['/contact', 'koushik'])
  // }

}
