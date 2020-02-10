import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
