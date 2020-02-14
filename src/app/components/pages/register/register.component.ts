import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showMsg = false;

  constructor(private fb: FormBuilder, private reg: RegisterService) {
    this.registerForm = this.fb.group({
      username: this.fb.control('',[Validators.required, Validators.minLength(4)]),
      email: this.fb.control('',[Validators.email, Validators.required]),
      password: this.fb.control('',[Validators.required, Validators.minLength(4)]),
      passrepeat: this.fb.control('',[Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {}

  ngOnChange(){
    this.showMsg=false;
  }

  register() {
    const formValue = this.registerForm.value;
    if (formValue.password === formValue.passrepeat) {
      this.showMsg = false;
      this.reg.register(
        formValue.username,
        formValue.email,
        formValue.password
      );
      console.log(formValue);
    } else {
      this.showMsg = true;
    }
  }
}
