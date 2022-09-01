import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() myMsg:string='';
@Output() outMsg:EventEmitter<string>=new EventEmitter();
outdata="passing data from child to parent";
  constructor() { }

  ngOnInit(): void {
    console.log(this.myMsg);
  }
  passData(){
    this.outMsg.emit(this.outdata);
  }
}
