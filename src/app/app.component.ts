import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.  

import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for reactive forms
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule/* any modules used in the template */]
})
export class AppComponent {
title: any;
}
// This component is now a standalone component and can be used without being declared in an NgModule.
// The `imports` array can include any other standalone components, directives, or pipes that are used in the template.