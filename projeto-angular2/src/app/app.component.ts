import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular2';
  todaydate: any;
  componentproperty: any;
  emailid: any;
  formdata!: FormGroup;
  constructor(private myservice: MyserviceService) { }
  //ngOnInit() { }
  //onClickSubmit(data: any)   {
  //   alert("ID de e-mail inserido: " + data.emailid);
  // }
  // ngOnInit() {
  // this.formdata = new FormGroup({
  // emailid: new FormControl("angular@gmail.com"),
  //passwd: new FormControl("abcd1234")
  //});
  // }
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])),
      //passwd: new FormControl("")
      passwd: new FormControl(""/*, this.passwordvalidation*/)
    });
  }
  passwordvalidation(formcontrol:FormControl) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
    return 
  }
  onClickSubmit(data: { emailid: any; }) { this.emailid = data.emailid; }

}
