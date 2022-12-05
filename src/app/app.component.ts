import { Component } from '@angular/core';
import { Name } from './shared/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AwardRecognition';
  searchText: any;

  Data: Name[]=[
    new Name('GSI GI 815', 'Souvik', 'India','14-10-2022','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GR 816','Siddhesh' , 'USA','05-18-2022', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GI 215','Rohan' ,'UK','03-11-2021','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GM 519', 'Vikash' , 'Canada','11-02-2022', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GS 810','Sumukh' ,  'India','13-05-2022', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GJ 205', 'Tanmay' ,  'China','03-03-2021', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GI 852','Sayan' , 'Germany','25-12-2021','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name( 'GSI GG 258', 'Amit' , 'Hong Kong','26-08-2021', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GL 789', 'Sourav' ,'India','14-10-2022','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Name('GSI GK 965', 'Abhinav' , 'Sri Lanka','17-11-2021', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  
  onDataAdded(Data:Name){
    this.Data.push(Data);

  }
}
