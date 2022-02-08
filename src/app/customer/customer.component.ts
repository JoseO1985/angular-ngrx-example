import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import {
  selectCustomer,
  addCustomer,
  filterCustomers,
  updateCustomer,
} from './store/action/customer.actions';
import { selectedCustomer } from './store/selector/customer.selectors';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent {
  selectedCustomer$: Observable<Customer>;

  constructor(private store: Store) {
    this.selectedCustomer$ = this.store.pipe(
      select(selectedCustomer),
      map((customer: Customer) => ({ ...customer } as Customer))
    );
  }

  onSelect($event: Customer) {
    this.store.dispatch(selectCustomer($event));
  }

  onSave($event: Customer) {
    this.store.dispatch(addCustomer($event));
  }

  /*onUpdate($event: Customer) {
    this.store.dispatch(updateCustomer($event));
  }*/

  onFilter($event: string) {
    this.store.dispatch(filterCustomers($event));
  }
}
