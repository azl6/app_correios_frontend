import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaEncomendaPage } from './nova-encomenda';

@NgModule({
  declarations: [
    NovaEncomendaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaEncomendaPage),
  ],
})
export class NovaEncomendaPageModule {}
