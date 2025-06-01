import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubmitFormService } from '../services/submitForm/submit-form.service';
import { MessageServiceService } from '../services/messageService/message-service.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(
    private formBuilder: FormBuilder,
    private submitForm: SubmitFormService,
    private MS: MessageServiceService
  ) {}

  value: string = '';
  isLoading: boolean = false;
  form!: FormGroup;

  onSubmit() {
    this.isLoading = true;
    this.submitForm
      .submitData('https://formspree.io/f/xdkznvea', this.form.value)
      .subscribe({
        next: (res) => {
          this.MS.showToast('success', 'Sent', 'Form submitted successfully!');
          this.isLoading = false;
          this.form.reset();
        },
        error: (err) => {
          console.log(err);
          this.MS.showToast('error', 'Failed', 'Form submission failed!');
          this.isLoading = false;
        },
      });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      message: [''],
    });
  }
}
