import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})

export class AccountAddComponent {
  amount: string;
  debit_account: string;
  credit_account: string;
  start_time: string;
  end_time: string;
  sequence: string;
  type: string;

  @Output() accountCreated = new EventEmitter();

  constructor(private accountService: AccountService) {
  //   accountService.addAccount(this.account).subscribe(account => {
  //     this.account = account;
  //     console.log(this.account);
  //   });
  }

  addAccount(event) {
    event.preventDefault();
    var newAccount = {
      amount: this.amount,
      debit_account: this.debit_account,
      credit_account: this.credit_account,
      start_time: this.start_time,
      end_time: this.end_time,
      sequence: this.sequence,
      type: this.type
    };

    this.accountService.addAccount(newAccount).subscribe(
      result => this.accountCreated.emit(result)
    );

    this.resetForm();
  }

  resetForm() {
    this.amount = '';
    this.debit_account = '';
    this.credit_account = '';
    this.start_time = '';
    this.end_time = '';
    this.sequence = '';
    this.type = '';
  }
}
