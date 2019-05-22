import { Injectable } from '@angular/core';
// import { Observable } from 'data/observable';
// var printId , binding = new Observable();

@Injectable()

export class LoginConfig {
    public loginMessage: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    public login_welcome : string= "Welcome Back !";
    public sign_in:string = "Sign in";
    public login:string = "LOGIN";
    public remember_me:string = "Remember me";
    public forgot:string = "Forgot Password?";
    public alert_msg : string = "Invalid username/password. Please verify the credentials";
}