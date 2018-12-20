import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
    /**Counter for increment */
    public currentCount = 0;

    /** Action from view to increment current counter*/
    public incrementCounter() {
        this.currentCount++;
    }
}
