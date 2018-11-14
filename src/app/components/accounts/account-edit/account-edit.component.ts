import { Component, Inject, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})

export class AccountEditComponent{

  // accountCreated = new EventEmitter();
  // newAccount: Account;

  constructor(
    public dialogRef: MatDialogRef<AccountEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Account,
    private accountService: AccountService
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateAccount() {
    this.accountService.updateAccount(this.data).subscribe();
  }

}

