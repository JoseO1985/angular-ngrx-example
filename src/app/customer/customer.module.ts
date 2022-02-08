import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCustomersComponent } from './filter-customers/filter-customers.component';
import { CustomerComponent } from './customer.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/effects/customer.effects';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    CustomerViewComponent,
    CustomerAddComponent,
    FilterCustomersComponent,
    CustomerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    EffectsModule.forFeature([CustomerEffects]),
    MaterialModule,
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent,
    FilterCustomersComponent,
    CustomerComponent,
  ],
})
export class CustomerModule {}
