import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {

  public value: string |undefined; // Не ініціалізуйте тут

  private onChange = (value: string) => {
    console.log(value);
  };
  private onTouched = () => {};

  constructor() {} // Не потрібно ChangeDetectorRef

  public onInputValueChange(e: Event): void {
    const targetElement = e.target as HTMLInputElement;
    const value = targetElement.value;

    this.onChange(value); // Викликайте зареєстровану onChange функцію
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched = () => {};
}