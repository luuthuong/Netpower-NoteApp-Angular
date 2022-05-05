import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from './../../services/note.service';
import INote from './../../services/IService';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public dataJSON:INote[]=[]
  constructor(private noteService:NoteService) {
    this.noteService.observableData$.subscribe(data=>{
      this.dataJSON.push(...data)
      // console.log('push datajson: ',this.dataJSON)
    })
  }

  ngOnInit(): void {
    this.noteService.getData();
  }

}
