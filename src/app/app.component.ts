import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = `${
    environment.production ? '[PRODUCTION MODE]' : '[DEVELOPMENT MODE]'
  } Basic Angular Ngrx Example`;
}
