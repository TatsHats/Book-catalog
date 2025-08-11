import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-book-modal',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-book-modal.html',
  styleUrl: './add-book-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookModal {
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<AddBookModal>) {}
  
  add() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
