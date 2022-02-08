import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectCustomerState =
  createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
  );

export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);

export const selectedCustomer = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) =>
    state.customers.find(
      (customer) => customer.id === state.selectedCustomerId
    ) || new Customer()
);

export const filterCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) =>
    state.customers.filter((customer: Customer) => {
      const matchFirstName = state.searchTerm
        ? customer.firstName.includes(state.searchTerm)
        : true;
      const matchLastName = state.searchTerm
        ? customer.lastName.includes(state.searchTerm)
        : true;
      const matchAge = state.searchTerm
        ? customer.age.toString() == state.searchTerm
        : true;
      const matchEmail = state.searchTerm
        ? customer.email.includes(state.searchTerm)
        : true;

      return matchFirstName || matchLastName || matchAge || matchEmail;
    })
);
