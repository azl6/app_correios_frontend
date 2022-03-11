import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomendaDTO } from '../../models/encomenda.dto';
import { EncomendaService } from '../../services/encomendas.service';

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

  ionViewDidLoad() {
    
  }

}
