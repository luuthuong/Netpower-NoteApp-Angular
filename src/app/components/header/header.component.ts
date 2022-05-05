import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from './../../services/note.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public  state=false
  constructor( private noteService:NoteService) {}

  ngOnInit(): void {

  }
  ActiveForm(){
    this.noteService.activeForm(true)
  }

}
