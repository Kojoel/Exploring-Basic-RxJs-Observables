import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, concat, from, interval, of, take, throwError } from 'rxjs';

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
    favColors$.subscribe({
      next: value => console.log("Using from: ", value),
      complete: () => console.log("End of observable for 'from'")
    }); // Emits each element in the array seperately

    // Working with interval: 
    const interval$ = interval(1000).pipe(take(5));
    interval$.subscribe({
      next: value => console.log(`Value: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      complete: () => console.log('Interval observable completed')
    }); // Emits a number every 1 second and the take method, selects only the first 5 elements emitted and displays thier timestamps alongside them.

    // Combining Observables: 
    const num$ = of([6,7,8,9,10]);
    const color$ = from(['indigo', 'red', 'mauve']);
    const combinedObservables$ = concat(num$, color$);
    combinedObservables$.subscribe({
      next: value => console.log('Using concat: ', value),
      complete: () => console.log('Combined Observables complete')
    }); // Combines two observables using the concat method into a single observable, and emmits the values stored in the combined observable

    // Error Handling: 
    const error$ = concat(
      of(1, 2, 3),
      throwError('Oops, something went wrong!')
    );

    error$.subscribe({
      next: value => console.log(`Emitted value: ${value}`),
      error: err => console.error(`Caught error: ${err}`),
      complete: () => console.log('Observable completed')
    }); // Logs promise resolved and the proceeds to log the error

}
}