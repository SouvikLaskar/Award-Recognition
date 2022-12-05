import { Call } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Name } from '../shared/data.model';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-nsearch',
  templateUrl: './nsearch.component.html',
  styleUrls: ['./nsearch.component.css']
})
export class NsearchComponent {
  @ViewChild('idInput') idInputRef!: ElementRef;
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('countryInput') countryInputRef!: ElementRef;
  @ViewChild('dojInput') dojInputRef!: ElementRef;
  @ViewChild('imgInput') imgInputRef!: ElementRef;
  
  @Output() dataAdded = new EventEmitter<Name>();

  constructor(private data: DataService){}
  addData= new FormGroup( {
    gid: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
    doj: new FormControl(''),
    img: new FormControl(''),  
  });

  saveData(){
    // console.log(this.addData.value);
    this.data.saveDetailsData(this.addData.value).subscribe((result)=>{
      console.log(result);
    });
   
    };
  }
  
  
  // onAddItem(){
  //   const dataid=this.idInputRef.nativeElement.value;
  //   const dataname=this.nameInputRef.nativeElement.value;
  //   const datacountry=this.countryInputRef.nativeElement.value;
  //   const datadoj=this.dojInputRef.nativeElement.value;
  //   const dataimg=this.idInputRef.nativeElement.value;
  //   const newdataAdded= new Name(dataid,dataname,datacountry,datadoj,dataimg);
  //   this.dataAdded.emit(newdataAdded);
  // }

  
