import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pseudo-form',
  templateUrl: './pseudo-form.component.html',
  styleUrls: ['./pseudo-form.component.scss']
})
export class PseudoFormComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  name:string = '';
  titleAlert:string = 'Pseudo is required';


  constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
        'name': [null, Validators.required],
      });
   }


 ngOnInit() {
   console.log(this.rForm.get('submit'));

  }

  addPost(post) {
   this.name = post.name;
    this.rForm.get('submit').valueChanges.subscribe(
      (submit) => {
        if (submit == 'name') {
            this.rForm.get('name').setValidators([Validators.required]),
            this.titleAlert = "Pseudo is required";
        } else {
            this.rForm.get('name').setValidators(Validators.required);
        }
      this.rForm.get('name').updateValueAndValidity();
      }
    )
  }
}
