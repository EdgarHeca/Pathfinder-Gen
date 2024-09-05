import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Name } from '../models/name';
import { LastName } from '../models/last-name';
import { Level } from '../models/level';
import { Class } from '../models/class';
import { CommAncest } from '../models/comm-ancest';
import { UncoAncest } from '../models/unco-ancest';
import { RareAncest } from '../models/rare-ancest';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getNames() {
    return this.http.get<Name[]>(`${this.apiUrl}/names`);
  }

  getLastNames() {
    return this.http.get<LastName[]>(`${this.apiUrl}/lastnames`);
  }

  getLevels(){
    return this.http.get<Level[]>(`${this.apiUrl}/levels`);
  }

  getClasses(){
    return this.http.get<Class[]>(`${this.apiUrl}/classes`);
  }

  getCommAncest(){
    return this.http.get<CommAncest[]>(`${this.apiUrl}/ancestriescomm`);
  }

  getUncoAncest(){
    return this.http.get<UncoAncest[]>(`${this.apiUrl}/ancestriesunco`);
  }

  getRareAncest(){
    return this.http.get<RareAncest[]>(`${this.apiUrl}/ancestriesrare`);
  }
}
