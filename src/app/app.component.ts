import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, interval, of, take } from 'rxjs';

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
    numbers$.subscribe(number => {
      console.log("Using of", number)
      console.log("End of observable for 'of'")
    }); // Emits an array of numbers at once

    // Working with from:
    const favColors$ = from(['blue', 'green', 'purple', 'lightblue', 'lemon-green', 'yellow', 'black']);
    favColors$.subscribe(color => {
      console.log("Using from: ", color)
      setTimeout(() => {
        console.log("End of observable for 'from")
      }, 200)
    }); // Emits each element in the array seperately

    // Working with interval 
    const interval$ = interval(1000).pipe(take(5));
    interval$.subscribe({
      next: value => console.log(`Value: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      complete: () => console.log('Interval observable completed')
    });
  }
}
