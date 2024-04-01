import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../Services/user/user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  isPasswordVisible: boolean = false;

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  signupForm !: FormGroup;
  
  constructor(
    private formbuilder : FormBuilder,
    private router: Router,
    private userService : UserService
    ){}
    fName : any; 
    lName : any; 
    
    ngOnInit(): void {
      this.signupForm = this.formbuilder.group(
        {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
        mobile: ['', [Validators.required, Validators.minLength(10)]],
      }
    )
    
  }
  
  // API Integration 

  registerUser() : void{
    const names = this.signupForm.value.name.split(' ');
    this.fName = names[0] || ''; 
    this.lName = names.slice(1).join(' ') || '';

    if(this.signupForm.valid){
        const requestData  = {
          fName: this.fName,
          lName: this.lName,
          email: this.signupForm.value.email,
          mobile: this.signupForm.value.mobile,
          password: this.signupForm.value.password
        }

        console.log(requestData);

        this.userService.register(requestData).subscribe(
          (response: any)=>{
              console.log("Registration successful" , response.data);
          }
        )
      }
    }
}
