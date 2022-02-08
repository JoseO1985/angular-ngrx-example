import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import {
  selectCustomers,
  filterCustomers,
} from '../store/selector/customer.selectors';
import { CustomerState } from '../store/reducer/customer.reducer';
import { removeCustomer } from '../store/action/customer.actions';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerViewComponent {
  customers$: Observable<Customer[]> = of([]);
  @Output() select: EventEmitter<Customer> = new EventEmitter();
  displayedColumns = ['id', 'firstName', 'lastName', 'age', 'email', 'actions'];

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(filterCustomers));
  }

  onSelect(customer: Customer) {
    this.select.next(customer);
  }

  onRemove(customer: Customer) {
    this.store.dispatch(removeCustomer(customer));
  }
}
