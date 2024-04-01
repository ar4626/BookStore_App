import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
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
 