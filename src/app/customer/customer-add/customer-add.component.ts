import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerAddComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Output() save: EventEmitter<Customer> = new EventEmitter();
  @Output() update: EventEmitter<Customer> = new EventEmitter();
  formGroup!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    const { customer } = changes;
    if (customer.currentValue.firstName) {
      this.buildForm();
    }
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.customer.id],
      firstName: [this.customer.firstName, [Validators.required]],
      lastName: [this.customer.lastName, [Validators.required]],
      age: [
        this.customer.age,
        [
          Validators.required,
          Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$'),
        ],
      ],
      email: [this.customer.email, [Validators.required, Validators.email]],
    });
  }

  saveCustomer(): void {
    if (!this.formGroup.valid) return;
    this.save.next(this.formGroup.value);
    this.resetForm();
  }
  resetForm(): void {
    this.formGroup.reset();
  }
}
