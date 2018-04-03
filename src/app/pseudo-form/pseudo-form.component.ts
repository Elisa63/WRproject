import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pseudo-form',
  templateUrl: './pseudo-form.component.html',
  styleUrls: ['./pseudo-form.component.scss']
})
export class PseudoFormComponent implements OnInit {

  rForm: FormGroup;
  nameText:string = 'Mon Pseudo';
  name = [];
  btnText: 'Submit';
  titleAlert:string = 'Pseudo is required';

  constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
        'name': [null, Validators.required],
      });
   }


 ngOnInit() {
   console.log(this.rForm.get('submit'));

  }



  addPseudo() {
  /*alert(this.fb['name']);*/
  this.name.push(this.nameText);
  this.nameText = '';
  /* console.log(this.rForm.get('name'));*/

  /*  this.rForm.get('submit').valueChanges.subscribe(
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
*/ }

}
