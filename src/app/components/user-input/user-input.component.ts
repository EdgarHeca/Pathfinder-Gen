import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Name } from '../../models/name';
import { ApiService } from '../../services/api.service';
import { LastName } from '../../models/last-name';
import { Level } from '../../models/level';
import { Class } from '../../models/class';
import { CommAncest } from '../../models/comm-ancest';
import { UncoAncest } from '../../models/unco-ancest';
import { RareAncest } from '../../models/rare-ancest';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent implements OnInit {
  apiService = inject(ApiService);
  names: Name[] = [];
  lastnames: LastName[] = [];

  levels: Level[] = [];
  classes: Class[] = [];
  ancestriesComm: CommAncest[] = [];
  ancestriesUnco: UncoAncest[] = [];
  ancestriesRare: RareAncest[] = [];

  ancestries: any[] = [];

  ngOnInit() {
    this.apiService.getNames().subscribe((data) => {
      this.names = data;
    });
    this.apiService.getLastNames().subscribe((data) => {
      this.lastnames = data;
    });

    this.apiService.getLevels().subscribe((data) => {
      this.levels = data;
    });

    this.apiService.getClasses().subscribe((data) => {
      this.classes = data;
    });

    this.apiService.getCommAncest().subscribe((data) => {
      this.ancestriesComm = data;
      this.ancestries = data;
    });

    this.apiService.getUncoAncest().subscribe((data) => {
      this.ancestriesUnco = data;
    });

    this.apiService.getRareAncest().subscribe((data) => {
      this.ancestriesRare = data;
    });
  }

  uncAncChecked() {
    if ((<HTMLInputElement>document.getElementById('uncAncestry')).checked) {
      console.log('Uncommon checked');
      this.ancestries = this.ancestries.concat(this.ancestriesUnco);
      this.ancestries.sort();
    } else {
      console.log('Uncommon unchecked');
      this.ancestries = this.ancestries.filter(
        (value) => !this.ancestriesUnco.includes(value)
      );
      this.ancestries.sort();
    }
  }

  rareAncChecked() {
    if ((<HTMLInputElement>document.getElementById('rarAncestry')).checked) {
      console.log('Rare checked');
      this.ancestries = this.ancestries.concat(this.ancestriesRare);
      this.ancestries.sort();
    } else {
      console.log('Rare unchecked');
      this.ancestries = this.ancestries.filter(
        (value) => !this.ancestriesRare.includes(value)
      );
      this.ancestries.sort();
    }
  }

  printArray() {
    console.log(this.ancestries);
    console.log(this.ancestriesComm);
    console.log(this.ancestriesUnco);
    console.log(this.ancestriesRare);
  }

  constructor() {}
}
