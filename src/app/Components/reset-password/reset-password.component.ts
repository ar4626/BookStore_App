import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  forgetForm !: FormGroup;

  constructor(
    private formbuilder : FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.forgetForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    )
  }
}
