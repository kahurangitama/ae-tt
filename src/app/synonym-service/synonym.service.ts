import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SynonymService {

  constructor (private http: Http) {}

  getSynonym(word) {
    return this.http.get(`https://api.datamuse.com/words?rel_syn=${word}`).toPromise();
  }
}
