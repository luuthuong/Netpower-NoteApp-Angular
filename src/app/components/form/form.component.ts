import { Component, Input, OnInit } from '@angular/core';
import INote from 'src/app/services/IService';
import { NoteService } from './../../services/note.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public active: boolean=false

  constructor(private noteService:NoteService) {

  }

  ngOnInit(): void {

  }
  public onCancel(){
    this.noteService.activeForm(false)
  }
  public onAdd(title:string,content:string): void {
    console.log({
      id:0,
      title:title,
      content:content,
      date:(new Date()).toLocaleString()
    })
  }
}
