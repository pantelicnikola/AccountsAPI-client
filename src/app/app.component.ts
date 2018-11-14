import { Component, Output } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent {

  @Output() accounts: Account[];

  constructor(private accountService: AccountService) {
    accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
      console.log(this.accounts);
    });
  }

  onAccountAdded(account) {
    this.accounts.push(account);
    console.log(this.accounts);

  }

}
