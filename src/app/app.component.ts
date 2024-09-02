import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Exploring-Basic-RxJs-Observables';

  constructor(){
    // Creating and Subscribing to an Observable with of:
    const numbers$ = of([1,2,3,4,5]);
    numbers$.subscribe(number => console.log("Using of", number));

    
  }
}
