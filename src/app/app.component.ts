import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// В основному для стилів я використовував , але як не знав як використати його для динамічної зміни кольору, тому використав звичайні стилі
// Завдання надто маленьке, тому я вирішив написати і стилі і верстку і логіку в одному файлі, раз ангуляр таке дозволяє. Звичайно, якби завдання було більше, я б розбив проєкт на частини

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  styles:`
    .worth {
      background-color: red;
    }
    .weak {
      background-color: red;
    }
    .medium {
      background-color: yellow;
    }
    .strong {
      background-color: green;
    }
  `,
  template: `
    <div class="flex h-60 items-center flex-col justify-center">
      <h1 class='mt-10 mb-5 font-bold' >{{message}}</h1>
      <input type="text" class="text-center border border-blue-700 w-60" (input)="onChange($event)" />
      <div class="mt-1 flex flex-row bg-gray-500 h-2" >
        <div class="w-20" [ngClass]="{'worth': strengthLevel === -1, 'weak': strengthLevel === 1 ,'medium': strengthLevel === 2, 'strong': strengthLevel === 3}"></div>
        <div class="w-20" [ngClass]="{'worth': strengthLevel === -1, 'medium': strengthLevel == 2, 'strong': strengthLevel === 3}"></div>
        <div class="w-20" [ngClass]="{'worth': strengthLevel === -1,'strong': strengthLevel === 3}"></div>
      </div>
    </div>
  `
})

export class AppComponent{
  password = '';
  strengthLevel = 0;
  message = 'Enter the password to check it`s strength';
  onChange($event: Event) {
    this.password = ($event.target as HTMLInputElement).value;
    this.checkStrength()
  }
  
  checkStrength() {
    if (this.password.length == 0) {
      this.strengthLevel = 0;
      this.message = 'Enter the password to check it`s strength'
    }  else
    if (this.password.length < 8) {
      this.strengthLevel = -1;
      this.message = 'Your password is too short'
    } else 
    {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /[0-9]/.test(this.password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);
      if (hasLetters && hasDigits && hasSymbols) {
        this.strengthLevel = 3; 
        this.message = 'Your password is very strong'
      } else 
      if (hasLetters && hasDigits || hasSymbols && hasDigits || hasLetters && hasSymbols) {
        this.strengthLevel = 2; 
        this.message = 'Your password is medium, but you can still make it stronger'
      } else {
        this.strengthLevel = 1
        this.message = 'Your password is too easy. You can make it stronger by adding other types of symbols'
      } 
    }
  }
}
