import { Routes } from '@angular/router';

// Components
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UpdatePropertyComponent } from './property/update-property/update-property.component';
import { DeletePropertyComponent } from './property/delete-property/delete-property.component';

import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AddAgentComponent } from './agent/add-agent/add-agent.component';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateUserComponent } from './customer/update-user/update-user.component';
import { DeleteUserComponent } from './customer/delete-user/delete-user.component';

import { EnquiryByAgentComponent } from './enquiry/enquiry-by-agent/enquiry-by-agent.component';
import { EnquiryByPropertyComponent } from './enquiry/enquiry-by-property/enquiry-by-property.component';
import { AddEnquiryComponent } from './enquiry/add-enquiry/add-enquiry.component';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.gaurd';

export const routes: Routes = [
  // Auth routes
  { path: 'login', component: LoginComponent },

  // Protected routes
  { path: 'properties', component: PropertyListComponent, canActivate: [AuthGuard] },
  { path: 'add-property', component: AddPropertyComponent, canActivate: [AuthGuard] },
  { path: 'update-property', component: UpdatePropertyComponent, canActivate: [AuthGuard] },
  { path: 'delete-property', component: DeletePropertyComponent, canActivate: [AuthGuard] },

  { path: 'agents', component: AgentListComponent, canActivate: [AuthGuard] },
  { path: 'add-agent', component: AddAgentComponent, canActivate: [AuthGuard] },

  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'update-user', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'delete-user', component: DeleteUserComponent, canActivate: [AuthGuard] },

  { path: 'enquiries-by-agent', component: EnquiryByAgentComponent, canActivate: [AuthGuard] },
  { path: 'enquiries-by-property', component: EnquiryByPropertyComponent, canActivate: [AuthGuard] },
  { path: 'add-enquiry', component: AddEnquiryComponent, canActivate: [AuthGuard] },

  // Default and wildcard routes
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: '**', redirectTo: '/properties' }
];
