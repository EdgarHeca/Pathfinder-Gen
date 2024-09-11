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

  allNames: any[] = [];
  femaleNames: Name[] = [];
  maleNames: Name[] = [];
  nonbinNames: Name[] = [];
  lastnames: LastName[] = [];

  levels: Level[] = [];
  classes: Class[] = [];
  ancestriesComm: CommAncest[] = [];
  ancestriesUnco: UncoAncest[] = [];
  ancestriesRare: RareAncest[] = [];

  ancestries: any[] = [];

  ngOnInit() {
    this.apiService.getFemaleNames().subscribe((data) => {
      this.femaleNames = data;
    });
    this.apiService.getMaleNames().subscribe((data) => {
      this.maleNames = data;
    });
    this.apiService.getNonbinNames().subscribe((data) => {
      this.nonbinNames = data;
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

  //Update ancestry list if Uncommon is checked
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

  //Update ancestry list if Rare is checked
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

  //Generate Character name when button is clicked
  generateCharName() {
    if(!Array.isArray(this.allNames) || !this.allNames.length){
      this.fillAllNames();
    }

    //Get from all names & last names
    if ((<HTMLInputElement>document.getElementById('all')).checked) {
      var name = this.allNames[Math.floor(Math.random() * this.allNames.length)];
      var lastname = this.lastnames[Math.floor(Math.random() * this.lastnames.length)];

      (<HTMLInputElement>document.getElementById('char-name')).setAttribute("value", name + " " + lastname);
    }
    //Get from female names & last names
    if ((<HTMLInputElement>document.getElementById('female')).checked) {
      var name = this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)] as any;
      var lastname = this.lastnames[Math.floor(Math.random() * this.lastnames.length)];

      (<HTMLInputElement>document.getElementById('char-name')).setAttribute("value", name + " " + lastname);
    }
    //Get from male names & last names
    if ((<HTMLInputElement>document.getElementById('male')).checked) {
      var name = this.maleNames[Math.floor(Math.random() * this.maleNames.length)] as any;
      var lastname = this.lastnames[Math.floor(Math.random() * this.lastnames.length)];

      (<HTMLInputElement>document.getElementById('char-name')).setAttribute("value", name + " " + lastname);
    }
    //Get from non-binary names & last names
    if ((<HTMLInputElement>document.getElementById('nonbin')).checked) {
      var name = this.nonbinNames[Math.floor(Math.random() * this.nonbinNames.length)] as any;
      var lastname = this.lastnames[Math.floor(Math.random() * this.lastnames.length)];

      (<HTMLInputElement>document.getElementById('char-name')).setAttribute("value", name + " " + lastname);
    }
  }

  printArray() {
    console.log(this.ancestries);
    console.log(this.ancestriesComm);
    console.log(this.ancestriesUnco);
    console.log(this.ancestriesRare);
  }

  fillAllNames(){
    this.allNames = this.femaleNames.concat(this.maleNames, this.nonbinNames);
    console.log("Fill all names" , this.femaleNames, this.maleNames, this.nonbinNames, this.allNames);
  }

  constructor() {
  }
}
