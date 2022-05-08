import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import INote from './services/IService';
import { BasecomponentComponent } from './basecomponent/basecomponent.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BasecomponentComponent implements OnInit {
  public stateForm:any=[{
    active: false,
    isAdd:true
  }]
  public dataInput:any;
  constructor(private noteService:NoteService){
    super()
  }


public onAdd(): void {

    const data={
      title:this.dataInput.title,
      content:this.dataInput.content,
      date:(new Date()).toLocaleString()
    }
      this.noteService.addData(data)
      this.noteService.activeForm({
        active:false,
        isAdd:true
      })
  }
  public submitData(data:any){
    this.dataInput=data
  }

  public onEdit(){
    this.noteService.editData(this.dataInput)
  }
  ngOnInit(): void {
    this.subcription =  this.noteService.observableActive$.subscribe(state=>{
      this.stateForm=state;
    })

  }
  public update(data:INote){

  }


}
