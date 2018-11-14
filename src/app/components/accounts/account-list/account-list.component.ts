import { Component, Input, Output } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Account } from '../account.model';
import { AccountEditComponent } from '../account-edit/account-edit.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  @Input() accounts: Account[];

  constructor(private accountService:AccountService, public dialog:MatDialog){}

  delete(id) {
    this.accountService.deleteAccount(id).subscribe(account => {
      var accounts = this.accounts;
      if (account.n == 1) {
        for (var i = 0; i < accounts.length; i++) {
          if (accounts[i]._id == id) {
            accounts.splice(i, 1);
          }
        }
      }
    });
  }

  edit(id) {
    var account;
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i]._id == id) {
        account = this.accounts[i];
      }
    }
    const dialogRef = this.dialog.open(AccountEditComponent, {
      data: {
        _id: account._id,
        amount: account.amount,
        debit_account: account.debit_account,
        credit_account: account.credit_account,
        start_time: account.start_time,
        end_time: account.end_time,
        sequence: account.sequence,
        type: account.type
      }
    });

    dialogRef.afterClosed().subscribe(account => {
      if (account) {
        this.accountService.updateAccount(account).subscribe( result => {
          for (var i = 0; i < this.accounts.length; i++) {
            if (account._id == this.accounts[i]._id) {
              this.accounts[i] = account;
            }
          }
        });
      }
    });
  }

}
