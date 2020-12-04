import { CustomValidators } from './custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusList = ['Stable', 'Critical', 'Finished'];
  ngOnInit() {
    this.projectForm = new FormGroup({
      projectData: new FormGroup({
        name: new FormControl(
          null,
          [Validators.required, CustomValidators.invalidProjectName],
          CustomValidators.asyncInvalidProjectName
        ),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projectStatus: new FormControl('Critical'),
    });
  }
  onSubmit() {
    console.log(this.projectForm);
  }
}
