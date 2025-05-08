import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UpdatePropertyComponent } from './property/update-property/update-property.component';
import { DeletePropertyComponent } from './property/delete-property/delete-property.component';

const routes: Routes = [
  { path: 'properties', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'update-property', component: UpdatePropertyComponent },
  { path: 'delete-property', component: DeletePropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
