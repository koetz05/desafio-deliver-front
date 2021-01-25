import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  bill = {
    name: '',
    originalValue: '0.0',
    paymentDate: '',
    dueDate: '',
  };
  submitted = false;

  constructor(
    private billService: BillService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  saveBill(): void {
    const data = {
      name: this.bill.name,
      originalValue: this.bill.originalValue,
      paymentDate: this.bill.paymentDate,
      dueDate: this.bill.dueDate
    };

    this.billService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        this.toastrService.error(
          error.error.message,
          'Favor Rever os Dados Informados',
          { timeOut: 3000 }
        );
      }
    );
  }

  newBill(): void {
    this.submitted = false;
    this.bill = {
      name: '',
      originalValue: '0.0',
      paymentDate: '',
      dueDate: '',
    };
  }
}
