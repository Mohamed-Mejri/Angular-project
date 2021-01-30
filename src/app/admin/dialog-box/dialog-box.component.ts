//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from '../participant';
import { FakeParticipantsItemService } from '../fake-participants-item.service';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  dash_participants : Participant[] ;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: Participant,private paritcipant: FakeParticipantsItemService) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.dash_participants= this.paritcipant.get();
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
    console.log(this.local_data );

    
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}