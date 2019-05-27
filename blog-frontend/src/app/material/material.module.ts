import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule, MatAccordion, MatAnchor, MatAutocomplete, MatCardModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
