import { Component, OnInit,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { LoginConfig} from './login.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginConfig]
})
export class LoginComponent implements OnInit {

  constructor(private _configuration: LoginConfig) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log(form);
  }

}
