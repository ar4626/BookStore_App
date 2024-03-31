import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

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
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;
  isPasswordVisible: boolean = false;

  onFocus(): void {
    this.isInputFocused = true;
  }

  onBlur(): void {
    this.isInputFocused = false;
  }

  onPasswordFocus(): void {
    this.isPasswordFocused = true;
  }

  onPasswordBlur(): void {
    this.isPasswordFocused = false;
  }

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  loginForm !: FormGroup;

  constructor(
    private formbuilder : FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]
      }
    )
  }
}
