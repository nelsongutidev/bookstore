import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onDestroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        console.log(value);
      });
  }

  onSubmit() {
    const email = this.form.get('email')?.value;
    console.log('Submitted', email);
    this.form.reset();
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
