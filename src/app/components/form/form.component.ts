import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NoteService } from './../../services/note.service';
import INote  from 'src/app/services/IService';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  implements OnInit {
  private current=localStorage.getItem('current')
  private localCurrent=this.current&&JSON.parse(this.current)
  @Input() dataInput={
    title:this.localCurrent?this.localCurrent.title:'',
    content:this.localCurrent?this.localCurrent.content:''
  }
  @Output() eventData=new EventEmitter<{
      title:string,
      content:string
    }>()
  constructor(private noteService:NoteService) {

  }
  ngOnInit(): void {

  }
  public onCancel(){
    this.noteService.activeForm({
      active:false,
      isAdd:false
    })
  }
  public onChange(){
    this.eventData.emit(this.dataInput)
  }
  public submitData(data:any){

  }
}
