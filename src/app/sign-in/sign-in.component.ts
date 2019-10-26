import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "fm-sign-in-component",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: "",
      password: ""
    });
  }

  signIn() {
    console.log("boom!");
  }
}