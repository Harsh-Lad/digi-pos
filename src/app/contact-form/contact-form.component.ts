import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneCountry: ['Bahrain'],
      phoneNumber: ['', Validators.required],
      businessName: [''],
      branches: ['', Validators.required],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      privacy: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically call a service to send the form data
      alert('Form submitted successfully!');
      this.contactForm.reset();
      this.submitted = false;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
