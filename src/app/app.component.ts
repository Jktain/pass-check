import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { PassStrengthComponent } from './pass-strength/pass-strength.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, PassStrengthComponent, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  public formGroup = new FormGroup({
    input: new FormControl('')
  })
}
