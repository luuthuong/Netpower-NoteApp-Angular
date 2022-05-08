import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from './../../services/note.service';
import INote from './../../services/IService';
import { BasecomponentComponent } from './../../basecomponent/basecomponent.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent extends BasecomponentComponent implements OnInit {
  public dataJSON:INote[]=[]
  private _store=localStorage
  constructor(private noteService:NoteService) {
    super()
  }
  ngOnInit(): void {
    this.dataJSON=this.getStore().length>0?JSON.parse(this.getStore()):[]
    this.subcription=  this.noteService.observableAction$.subscribe(action=>{
      switch(action.type){
        case "delete":
          this.dataJSON=this.dataJSON.filter(item=>item.id!==action.payload.id)
          this.noteService.updateStorage( this.dataJSON );
          break
        case "edit":
          const current=localStorage.getItem('current')
          const localCurrent=current&&JSON.parse(current)
          this.dataJSON=this.dataJSON.map(item=>{
            return item.id===localCurrent.id?{
              ...action.payload,
              id:localCurrent.id,
              date:(new Date()).toLocaleString()
            }:item
          })
          this.noteService.updateStorage(this.dataJSON);
          break;
        case "add":
          this.dataJSON.push({
            ...action.payload,
            id:this.dataJSON.length+1
          });
          this.noteService.updateStorage(this.dataJSON);
          break;
        default:
          throw new Error("Action is undefined")
      }
    })
  }

  private getStore():string{
    return this._store.getItem('data')||''
  }

}

