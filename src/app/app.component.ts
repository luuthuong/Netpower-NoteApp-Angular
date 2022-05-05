import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import INote from './services/IService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public active=false
  constructor(private noteService:NoteService){
    noteService.observableActive$.subscribe(state=>{
      this.active=state
    })
  }
  update(data:INote){
    
  }



}
