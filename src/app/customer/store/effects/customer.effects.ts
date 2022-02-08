import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import * as CustomerActions from '../action/customer.actions';

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private store: Store) {}

  clearEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.filterCustomers),
      switchMap(() => of(CustomerActions.clearSelectedCustomer()))
    )
  );
}
