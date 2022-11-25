import { Call } from '@angular/compiler';
import { Component, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nsearch',
  templateUrl: './nsearch.component.html',
  styleUrls: ['./nsearch.component.css']
})
export class NsearchComponent {
  searchText: any;
  Names = [
    { id: 'GSI GI 815', name: 'Souvik', country: 'India'},
    { id: 'GSI GR 816', name: 'Siddhesh' , country: 'USA'},
    { id: 'GSI GI 215', name: 'Rohan' , country: 'UK'},
    { id: 'GSI GM 519', name: 'Vikash' , country: 'Canada' },
    { id: 'GSI GS 810', name: 'Sumukh' , country: 'India'},
    { id: 'GSI GJ 205', name: 'Tanmay' , country: 'China'},
    { id: 'GSI GI 852', name: 'Sayan' , country: 'Germany'},
    { id: 'GSI GG 258', name: 'Amit' , country: 'Hong Kong'},
    { id: 'GSI GL 789', name: 'Sourav' , country: 'India'},
    { id: 'GSI GK 965', name: 'Abhinav' , country: 'Sri Lanka'}
  ];

  onClick(){
    
  }
}
