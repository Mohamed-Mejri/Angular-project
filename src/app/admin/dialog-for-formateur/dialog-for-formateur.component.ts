import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FakeFormateurItemService } from '../fake-formateur-item.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-dialog-for-formateur',
  templateUrl: './dialog-for-formateur.component.html',
  styleUrls: ['./dialog-for-formateur.component.css']
})
export class DialogForFormateurComponent {

  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DialogForFormateurComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: Formateur) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});

    
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}