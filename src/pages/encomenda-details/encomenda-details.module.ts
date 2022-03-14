import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncomendaDetailsPage } from './encomenda-details';

@NgModule({
  declarations: [
    EncomendaDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EncomendaDetailsPage),
  ],
})
export class EncomendaDetailsPageModule {}
