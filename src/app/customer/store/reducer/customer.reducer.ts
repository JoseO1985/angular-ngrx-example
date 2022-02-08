import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import { Customer } from '../../../models/customer';
import { UUID } from 'angular2-uuid';

export const customerFeatureKey = 'customer';
export interface CustomerState {
  customers: Customer[];
  selectedCustomerId: string | null;
  searchTerm: string | null;
}

export const initialState: CustomerState = {
  customers: [],
  selectedCustomerId: null,
  searchTerm: null,
};

const userWithId = (customer: Customer) => ({
  ...customer,
  id: UUID.UUID(),
});

const saveOrUpdate = (state: CustomerState, customer: Customer) => {
  const clone = [...state.customers];
  const posToUpdate = clone.findIndex((c) => c.id === customer.id);
  if (posToUpdate != -1) {
    clone[posToUpdate] = customer;
    return clone;
  }
  return [...clone, userWithId(customer)];
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer, (state: CustomerState, { customer }) => ({
    ...state,
    customers: saveOrUpdate(state, customer),
  })),
  /*on(CustomerActions.updateCustomer, (state: CustomerState, { customer }) => ({
    ...state,
    customers: state.customers.map((c) =>
      c.id === customer.id ? ({ ...c, ...customer } as Customer) : c
    ),
  })),*/
  on(CustomerActions.removeCustomer, (state: CustomerState, { id }) => ({
    ...state,
    customers: state.customers.filter((customer) => customer.id !== id),
  })),
  on(CustomerActions.selectCustomer, (state: CustomerState, { id }) => ({
    ...state,
    selectedCustomerId: id,
  })),
  on(CustomerActions.clearSelectedCustomer, (state: CustomerState) => ({
    ...state,
    selectedCustomerId: null,
  })),
  on(
    CustomerActions.filterCustomers,
    (state: CustomerState, { searchTerm }) => ({
      ...state,
      searchTerm: searchTerm,
    })
  )
);
export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
