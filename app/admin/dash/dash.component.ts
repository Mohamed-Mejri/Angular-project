import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { FakeParticipantsItemService } from '../fake-participants-item.service';
import  {MatTableDataSource} from '@angular/material/table';
import { Participant } from '../participant';
import { Session } from '../session';
import { Formateur } from '../formateur';
import { FakeFormateurItemService } from '../fake-formateur-item.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  dash_sessionItems;
  dash_participants : Participant[] ;
  dataSource
  count_item =count_items;
  arrayy;
  
  displayedColumns = ['track', 'count'];
  bogusDataSource = new MatTableDataSource<session_count>(null);


  p_displayedColumns = ['nom', 'prenom'];
  p_bogusDataSource = new MatTableDataSource<Participant>(null);
  p_dataSource ;

  dash_formateurs : Formateur[] ;
  
  constructor(private formateur: FakeFormateurItemService,private sessionItemService: FakesessionitemService,private paritcipant: FakeParticipantsItemService) { }
  ngOnInit(): void {
    this.dash_sessionItems= this.sessionItemService.get();
    this.dash_participants= this.paritcipant.get();
    this.dash_formateurs= this.formateur.get();

    this.p_dataSource =new MatTableDataSource<Formateur>(this.dash_formateurs);

    
    this.dataSource = new MatTableDataSource<session_count>(this.count_item);
    this.count_item=count_items;
    this.arrayy = [] ; 

    var arrayLength = this.count_item.length;
      for (var i = 0; i < arrayLength; i++) {
          this.arrayy.push(this.count_item[i].track);
      }

      var arrayLengthh = this.arrayy.length;
      for (var i = 0; i < arrayLengthh; i++) {
      
          function startsWith(wordToCompare) {
          return function(element) {
            return (element.track === wordToCompare) ;
          }
      }
      this.count_item[i].count=this.dash_sessionItems.filter(startsWith(this.arrayy[i])).length;

      }

    


  }

  


}

export class session_count {

  constructor(
      public count: number,
      public track: string) { }
}



export const count_items: session_count[] = [
    {count:1 ,
    track :"MEAN"
    },
    {count: 1,
    track :"Ionic"
    },
    {count:1 ,
    track :"Angular"
    },
    {count: 1,
    track :"NodeJS"
    },
    {count:0 ,
    track :"Xamarin"
    },
    {count:0 ,
    track :"Android"
    }
];



