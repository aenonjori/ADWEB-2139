import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  hidden = false;
  showFiller = false;
  longText = "Holy Angel University"
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
