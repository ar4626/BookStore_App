import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user/user.service';

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
    private router: Router,
    private userService : UserService
  ){}

  ngOnInit(): void {
    this.forgetForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    )
  }

  //API Integration
  forgetPassword(): void {
    if (this.forgetForm.valid) {
      const requestData = {
        email: this.forgetForm.value.email
      };
      console.log(requestData);
      this.userService.forgetPassword(requestData).subscribe(
        (response: any) => {
          //Handle success response
          console.log(response.message);
        },
        (error: any) => {
          console.log("Email sending error: " + error.message);
        }
      )
    }
  }
}
 