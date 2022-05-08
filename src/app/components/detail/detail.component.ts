import { Component, Input, OnInit } from '@angular/core';
import  INote  from 'src/app/services/IService';
import { BasecomponentComponent } from './../../basecomponent/basecomponent.component';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent   implements OnInit {
  @Input() note!:INote
  constructor(private noteService:NoteService) {

  }

  ngOnInit(): void {
  }
  public Delete(data:INote){
    this.noteService.deleteData(data)
  }
  public Edit(data:INote){
    localStorage.setItem('current',JSON.stringify(data))
    this.noteService.activeForm({
      active:true,
      isAdd:false
    })
  }

}
