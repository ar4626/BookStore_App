import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  isPasswordVisible: boolean = false;

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  resetForm !: FormGroup;

  constructor(
    private formbuilder : FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.resetForm = this.formbuilder.group(
      {
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
        confirmPassword: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      }
    )
  }
}
