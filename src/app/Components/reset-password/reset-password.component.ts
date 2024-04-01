import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  isPasswordVisible: boolean = false;

  toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  token : any;
  resetForm !: FormGroup;

  constructor(
    private formbuilder : FormBuilder,
    private route: Router,
    private activeRoute : ActivatedRoute,
    private userService: UserService
  ){
    this.token = this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.resetForm = this.formbuilder.group(
      {
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
        confirmPassword: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      }
    )
  }

  resetPassword(): void {
    const requestData = {
      newPassword: this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmPassword
    };
    console.log(requestData);
    console.log(this.token);
    this.userService.reset(requestData, this.token).subscribe(
      (response: any) => {
        //handle success response
        console.log("Reset successful", response.data);
        // localStorage.setItem('token', response.data);
        this.route.navigateByUrl('/login');
      },
      (error: any) => {
        console.error("Reset failed", error);
      }
    );
  }
}
