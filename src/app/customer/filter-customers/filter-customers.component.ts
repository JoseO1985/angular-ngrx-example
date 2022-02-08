import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter-customers',
  template: `
    <form>
      <mat-form-field appearance="standard" floatLabel="always">
        <input
          matInput
          type="text"
          (input)="onFilter($event.target)"
          placeholder="Filter by firstName, lastName, age or email"
          style="width: 200px;"
        />
      </mat-form-field>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        justify-content: center;
      }
      mat-form-field {
        width: 400px;
        ::ng-deep input {
          width: 400px !important;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterCustomersComponent {
  @Output() filter: EventEmitter<any> = new EventEmitter();

  onFilter($event: any) {
    this.filter.next($event.value);
  }
}
