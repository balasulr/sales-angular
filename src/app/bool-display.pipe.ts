import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // Decorator called Pipe
  name: 'boolDisplay' // name is what use in the code to call
})
export class BoolDisplayPipe implements PipeTransform { // Class that implements a Interface

  transform(boolValue: boolean, lang: string = "en"): string { // 2 parameter: boolValue is fed into pipe then had ...args: unknown[] after value: boolean which deleted. string is return type
    if(lang === "en") { // Default language
      return (boolValue) ? "Yes" : "No";
    } else {
      return (boolValue) ? "Oui" : "Non" // Having the Yes or No show up in French
    }
  }

}
