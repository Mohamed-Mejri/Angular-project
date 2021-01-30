import { Component, OnInit,ViewChild } from '@angular/core';
import { FakeFormateurItemService } from '../fake-formateur-item.service';
import { Formateur } from '../formateur';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogForFormateurComponent } from '../dialog-for-formateur/dialog-for-formateur.component';
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  
  
  dash_formateurs : Formateur[] ;
  dataSource;
  constructor(public dialog: MatDialog,private formateur: FakeFormateurItemService) { 
    this.dash_formateurs= this.formateur.get();
  
    this.dataSource = this.dash_formateurs;


  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['nom', 'prenom','email','societe','domaine','action'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogForFormateurComponent, {
      width: '400pxw',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('resultat');
      console.log(result.data);
      if(result.event == 'Add'){

        this.formateur.add(result.data);
        this.table.renderRows();



      }else if(result.event == 'Update'){
        this.formateur.edit(result.data);
        this.table.renderRows();

      }else if(result.event == 'Delete'){
        this.formateur.delete(result.data);
        this.table.renderRows();

      }
    });
  }


}
