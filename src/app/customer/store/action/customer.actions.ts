import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const updateCustomer = createAction(
  '[Customer] Update Customer',
  (customer: Customer) => ({ customer })
);

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({ customer })
);

export const removeCustomer = createAction(
  '[Customer] Remove Customer',
  (customer: Customer) => ({ id: customer.id })
);

export const selectCustomer = createAction(
  '[Customer] Select Customer',
  (customer: Customer) => ({ id: customer.id })
);

export const clearSelectedCustomer = createAction(
  '[Customer] Clear Selected Customer'
);

export const filterCustomers = createAction(
  '[Customer] Filter Customers',
  (searchTerm: string) => ({ searchTerm })
);
