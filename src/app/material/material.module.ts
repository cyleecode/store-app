import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const material = [CommonModule, MatButtonModule];

@NgModule({
  imports: [...material],
  exports: [...material]
})
export class MaterialModule {}
