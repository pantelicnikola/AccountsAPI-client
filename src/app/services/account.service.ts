import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class AccountService {
  constructor (private http:Http) {
    console.log('Service Initialized');
  }

  getAccounts() {
    return this.http.get('http://localhost:3000/api/accounts').pipe(map(res => res.json()));
  }

  deleteAccount(id) {
    return this.http.delete('http://localhost:3000/api/account/' + id).pipe(map(res => res.json()));
  }

  addAccount(newAccount) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/account', JSON.stringify(newAccount), {headers: headers}).pipe(map(res => res.json()));
  }

  updateAccount(updAccount) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/account/' + updAccount._id, JSON.stringify(updAccount), {headers: headers}).pipe(map(res => res.json()));
  }
}
