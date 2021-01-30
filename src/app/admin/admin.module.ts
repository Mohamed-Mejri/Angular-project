import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormateurComponent } from './formateur/formateur.component';
import { DialogForFormateurComponent } from './dialog-for-formateur/dialog-for-formateur.component';


const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [{ path: 'add', component: SessionAddFormComponent },
  { path: 'edit/:id', component:
  SessionEditFormComponent },
  { path: 'list', component: SessionItemListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
  ],
  }
  ];

@NgModule({
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent,
    DialogBoxComponent, DialogForFormateurComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
    
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
