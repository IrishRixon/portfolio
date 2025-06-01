import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormService } from '../services/submitForm/submit-form.service';
import { MessageServiceService } from '../services/messageService/message-service.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder, private submitForm: SubmitFormService, private MS: MessageServiceService) {}

  value: string = "";
  form!: FormGroup;

  onSubmit() {
    this.submitForm.submitData('https://formspree.io/f/xdkznvea', this.form.value)
    .subscribe({
      next: (res) => {
        this.MS.showToast();
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      message: ['']
    })
  }
}
