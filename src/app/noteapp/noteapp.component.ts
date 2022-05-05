import { Component, OnInit, Output ,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-noteapp',
  templateUrl: './noteapp.component.html',
  styleUrls: ['./noteapp.component.scss']
})
export class NoteappComponent implements OnInit {
  @Output() active=new EventEmitter<boolean>();
  public state!:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  public onActiveForm(active:boolean){
    this.state=active;
  }

}
