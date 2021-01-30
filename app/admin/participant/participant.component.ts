import { Component, OnInit,ViewChild } from '@angular/core';
import { FakeParticipantsItemService } from '../fake-participants-item.service';
import { Participant } from '../participant';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  dash_participants : Participant[] ;
  dataSource;
  constructor(public dialog: MatDialog,private paritcipant: FakeParticipantsItemService) { 

    this.dash_participants= this.paritcipant.get();  
    this.dataSource = this.dash_participants;
  }
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['nom', 'prenom','email','societe','poste','action'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400pxw',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('resultat');
      console.log(result.data);
      if(result.event == 'Add'){

        this.paritcipant.add(result.data);
        this.table.renderRows();



      }else if(result.event == 'Update'){
        this.paritcipant.edit(result.data);
        this.table.renderRows();

      }else if(result.event == 'Delete'){
        this.paritcipant.delete(result.data);
        this.table.renderRows();

      }
    });
  }







}

