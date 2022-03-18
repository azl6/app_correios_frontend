import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { EncomendaDTO } from '../../models/encomenda.dto';
import { EncomendaService } from '../../services/encomendas.service';
import { EncomendaDetailsPage } from '../encomenda-details/encomenda-details';

/**
 * Generated class for the EncomendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encomendas',
  templateUrl: 'encomendas.html',
})
export class EncomendasPage {

  items: EncomendaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public encomendaService: EncomendaService) {
  }

  ionViewDidEnter(){
    
  }
  
  ionViewWillEnter(){
    this.items = this.encomendaService.findLoggedUserEncomendas();
  }

  details(encomenda: EncomendaDTO){
    this.navCtrl.push(EncomendaDetailsPage, encomenda)
  }



}
