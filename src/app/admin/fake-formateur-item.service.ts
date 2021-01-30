import { Injectable } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { FormateurITEMS } from './formateurs';
@Injectable({
  providedIn: 'root'
})
export class FakeFormateurItemService {

 
  constructor() { }
  get() {return FormateurITEMS;}
  add(formateur) {
    formateur.id = FormateurITEMS.length + 1;
    delete formateur['action'];

    console.log(formateur);
    FormateurITEMS.push(formateur);
    }

    reset_index(){
      var arrayLength = FormateurITEMS.length;
      for (var i = 0; i < arrayLength; i++) {
          console.log(FormateurITEMS[i].id=i+1);
          //Do something
      }
    

    }

    delete(formateur) {
      console.log("before");      
      console.log(FormateurITEMS);
      console.log("attri")
      console.log(formateur);
      FormateurITEMS.splice(formateur.id-1, 1);
      console.log("after");      
      console.log(FormateurITEMS);
      this.reset_index();

      }

      getParticipant(id: number) {
        return FormateurITEMS[id - 1];
        }

    edit(formateur){
      console.log("before");      
      console.log(FormateurITEMS);
      console.log("attri")
      console.log(formateur);
      FormateurITEMS[formateur.id-1].nom=formateur.nom;
      FormateurITEMS[formateur.id-1].prenom=formateur.prenom;
      FormateurITEMS[formateur.id-1].email=formateur.email;
      FormateurITEMS[formateur.id-1].societe=formateur.societe;
      FormateurITEMS[formateur.id-1].domaine=formateur.domaine;


        console.log("after");      
        console.log(FormateurITEMS); 

      





    }

  


}

