// src/app/flames/flames.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-flames',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule here
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.css']
})
export class FlamesComponent {
  name1: string = '';
  name2: string = '';
  result: string = '';

  removeCommonChars(name1: string, name2: string): string {
    let name1Array = name1.split('');
    let name2Array = name2.split('');

    name1Array = name1Array.filter(char => {
      const index = name2Array.indexOf(char);
      if (index !== -1) {
        name2Array.splice(index, 1);
        return false;
      }
      return true;
    });

    return name1Array.join('') + name2Array.join('');
  }

  calculateFlames(count: number): string {
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;

    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }

    return flames[0];
  }

  getRelationship(letter: string): string {
    switch (letter) {
      case 'F': return 'Friends 👫';
      case 'L': return 'Love ♥️' ;
      case 'A': return 'Affection 😍';
      case 'M': return 'Marriage 💍';
      case 'E': return 'Enemy 😠';
      case 'S': return 'Sibling 👬';
      default: return 'Unknown 🤔';
    }
  }

  calculateRelationship(): void {
    if (!this.name1.trim() || !this.name2.trim()) {
      alert('Please provide both names');
      return;
    }
    const cleanedName1 = this.name1.toLowerCase().replace(/\s+/g, '');
    const cleanedName2 = this.name2.toLowerCase().replace(/\s+/g, '');

    const remainingChars = this.removeCommonChars(cleanedName1, cleanedName2);
    const count = remainingChars.length;

    const flamesResult = this.calculateFlames(count);
    this.result = this.getRelationship(flamesResult);
    this.logNamesToTerminal(this.name1, this.name2, this.result);
    setTimeout(() => this.showPopup(), 0);
  }

logNamesToTerminal(name1: string, name2: string, result: string): void {
    console.log(`Name1: ${name1}, Name2: ${name2}, Result: ${result}`);
  }

  showPopup(): void {
    if (confirm(`Result: ${this.result}\n\nClick OK to clear the form.`)) {
      this.clearForm();
    }
  }

  clearForm(): void {
    this.name1 = '';
    this.name2 = '';
    this.result = '';
  }
}
