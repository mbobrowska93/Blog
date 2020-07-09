import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';




const MaterialComponents = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatSortModule
 


]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})

export class MaterialModule { }
