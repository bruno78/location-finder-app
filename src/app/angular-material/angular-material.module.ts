import { NgModule } from '@angular/core';

import { MdCardModule, MdGridListModule, MdButtonModule, MdToolbarModule,
         MdTabsModule, MdListModule, MdSlideToggleModule,
         MdInputModule, MdAutocompleteModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MdCardModule, MdGridListModule, MdButtonModule, MdToolbarModule,
           MdTabsModule, MdListModule, MdSlideToggleModule,
           MdInputModule, MdAutocompleteModule, MdProgressSpinnerModule],
  exports: [MdCardModule, MdGridListModule, MdButtonModule, MdToolbarModule,
           MdTabsModule, MdListModule, MdSlideToggleModule,
           MdInputModule, MdAutocompleteModule, MdProgressSpinnerModule]
})

export class AngularMaterialModule { }
