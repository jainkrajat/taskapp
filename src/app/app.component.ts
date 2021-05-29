import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskapp';
  matInputHide=false;
  matAddButton=true;
  saveButton=false;
  cancelButton=false;
  taskinputvalue:string;
  todo = [
   'Need to create header of application',
   'need to decide icon',
   'need to footer',
   'need to add button',
   'need t setup project'
  ];

  done = [];

  progress=['study going on','taskmanagement work done']
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addNewTask(){
this.matInputHide=true;
this.matAddButton=false;
this.saveButton=true;
  this.cancelButton=true;

  }

  makeCancel(){
    this.matInputHide=false;
this.matAddButton=true;
this.saveButton=false;
  this.cancelButton=false;
  }
  saveData(taskinputvalue){
console.log(taskinputvalue);
this.todo.push(taskinputvalue);
this.taskinputvalue='';

  }
  

}
