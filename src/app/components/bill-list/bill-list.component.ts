import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
})
export class BillListComponent implements OnInit {
  bills: any;
  currentBill = null;
  currentIndex = -1;
  title = '';

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.retrieveBills();
  }

  retrieveBills(): void {
    this.billService.getAll().subscribe(
      (data) => {
        this.bills = data;
      },
      () => {}
    );
  }
  
  setActiveBill(bill, index): void {
    console.log(bill);
    this.currentBill = bill;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveBills();
    this.currentBill = null;
    this.currentIndex = -1;
  }
}
