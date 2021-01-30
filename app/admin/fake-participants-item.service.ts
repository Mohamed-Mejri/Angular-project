import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { ParticipantITEMS } from './participants';

@Injectable({
  providedIn: 'root'
})
export class FakeParticipantsItemService {


  constructor() { }
  get() {return ParticipantITEMS;}

  add(participant) {
    participant.id = ParticipantITEMS.length + 1;
    delete participant['action'];
    console.log(participant);
    ParticipantITEMS.push(participant);
    }

    reset_index(){
      var arrayLength = ParticipantITEMS.length;
      for (var i = 0; i < arrayLength; i++) {
          console.log(ParticipantITEMS[i].id=i+1);
          //Do something
      }
    }

    delete(participant) {
      
        ParticipantITEMS.splice(participant.id-1, 1);
    
      this.reset_index();

      }
Q
      getParticipant(id: number) {
        return ParticipantITEMS[id - 1];
        }

    edit(participant){
      console.log("before");      
      console.log(ParticipantITEMS);
      console.log("attri")
      console.log(participant);
        ParticipantITEMS[participant.id-1].nom=participant.nom;
        ParticipantITEMS[participant.id-1].prenom=participant.prenom;
        ParticipantITEMS[participant.id-1].email=participant.email;
        ParticipantITEMS[participant.id-1].societe=participant.societe;
        ParticipantITEMS[participant.id-1].poste=participant.poste;
        console.log("after");      
        console.log(ParticipantITEMS); 

      





    }


}
