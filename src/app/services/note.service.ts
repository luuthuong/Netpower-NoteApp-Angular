import { Injectable } from '@angular/core';
import INote from './IService';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public dataJSON:INote[]=[]

  private active =new Subject<{
    active:boolean,
    isAdd:boolean
  }>()
  private data=new Subject<INote[]>()
  private action=new Subject<{type:string,payload:INote}>()

  public observableActive$=this.active.asObservable()
  public observableData$=this.data.asObservable()
  public observableAction$=this.action.asObservable()

  constructor() { }

  public activeForm(state:{
    active:boolean,
    isAdd:boolean
  }){
    this.active.next(state)
  }

  public addData(data:any){
    this.action.next({
      type:'add',
      payload:data
    })
  }
  public deleteData(data:INote){
    this.action.next({
      type:'delete',
      payload:data
    })
  }
  public editData(data:any){
    
    this.action.next({
      type:'edit',
      payload:data
    })
  }
  public updateStorage(data:INote[]){
    localStorage.setItem('data',JSON.stringify(data))
  }

}
