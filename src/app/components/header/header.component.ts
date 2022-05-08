import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from './../../services/note.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  constructor( private noteService:NoteService) {}

  ngOnInit(): void {

  }
  ActiveForm(){
    localStorage.removeItem('current')
    this.noteService.activeForm({
      active:true,
      isAdd:true
    })
  }

}
