import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly contactForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  protected onSubmit(): void {
    if (this.contactForm.valid) {
      const { email, subject, message } = this.contactForm.getRawValue();
      window.location.href = `mailto:contact@rafaelmasson.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('De: ' + email + '\n\n' + message)}`;
      this.contactForm.reset();
    }
  }
}
