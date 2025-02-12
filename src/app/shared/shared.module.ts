import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PageNotFoundComponent, NoDataComponent],
  exports: [PageNotFoundComponent, NoDataComponent],
})
export class SharedModule {}
