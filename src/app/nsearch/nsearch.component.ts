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
    { id: 'GSI GI 815', name: 'Souvik', country: 'India',doj:'14-10-2022', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GR 816', name: 'Siddhesh' , country: 'USA',doj:'05-18-2022', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GI 215', name: 'Rohan' , country: 'UK',doj:'03-11-2021', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GM 519', name: 'Vikash' , country: 'Canada',doj:'11-02-2022', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' },
    { id: 'GSI GS 810', name: 'Sumukh' , country: 'India',doj:'13-05-2022', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GJ 205', name: 'Tanmay' , country: 'China',doj:'03-03-2021', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GI 852', name: 'Sayan' , country: 'Germany',doj:'25-12-2021', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GG 258', name: 'Amit' , country: 'Hong Kong',doj:'26-08-2021', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GL 789', name: 'Sourav' , country: 'India',doj:'14-10-2022', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
    { id: 'GSI GK 965', name: 'Abhinav' , country: 'Sri Lanka',doj:'17-11-2021', img:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'}
  ];

  onClick(){
    
  }
}
