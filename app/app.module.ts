import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CommonModule } from '@angular/common';
import { DashComponent } from './admin/dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { ParticipantComponent } from './admin/participant/Participant.component';


import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormateurComponent} from './admin/formateur/formateur.component';
import { DialogBoxComponent } from './admin/dialog-box/dialog-box.component';
import { DialogForFormateurComponent } from './admin/dialog-for-formateur/dialog-for-formateur.component';
const appRoutes: Routes = [
  {
  path: 'dash',
  component: DashComponent
  },
  {
    path: 'part',
    component: ParticipantComponent
  },
  {
    path:'formateur',
    component: FormateurComponent


  },
  {
  path: 'sessions',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, 
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    FormateurComponent,
    AppComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    DashComponent,
    ParticipantComponent
  ],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,    
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
