export class strengthLogic {
  password = '';
  strengthLevel = 0;
  message = 'Enter the password to check it`s strength';

  onChange($event: Event) {
    this.password = ($event.target as HTMLInputElement).value;
    this.checkStrength()
  }

  checkStrength() {
    this.strengthLevel = 0;

    if (this.password.length < 8) {
      this.strengthLevel = -1;
    } else {
      if (/[a-zA-Z]/.test(this.password)) this.strengthLevel++;
      if (/[0-9]/.test(this.password)) this.strengthLevel++;
      if (/[^a-zA-Z0-9]/.test(this.password)) this.strengthLevel++;
    }

    console.log(this.strengthLevel);
  }
}