import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  protected formGroup!: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void{
    this.formGroup = new FormGroup(
      {
        userName: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
      }
    );
  }

  get getUserName(){
    return this.formGroup.get('userName');
  }

  get getPassword(){
    return this.formGroup.get('password');
  }

  public LogIn(){
    console.log(this.getUserName?.value, this.getPassword?.value)
    this.userServices.requestUsers().subscribe(
      (result) => {
        result.forEach(
          (dataObtained) => {
            if(dataObtained.passsword == this.getPassword?.value && dataObtained.userName == this.getUserName?.value){
              localStorage.setItem("userName", this.getUserName?.value);
              this.router.navigate(['fileUpload']);
            }else{
              alert("Usuario o contraseña no validos");
            }
          }
        );

      }
    );
  }

}
