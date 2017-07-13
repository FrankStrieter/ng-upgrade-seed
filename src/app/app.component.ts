import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  willPowerInstinct = {
    title: 'The Willpower Instinct',
    subtitle: 'How Self-Control Works, Why It Matters, and What You Can Do to Get More of It',
    author: 'Kelly McGonigal'
  }
}
