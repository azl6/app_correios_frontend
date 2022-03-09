import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomendaDTO } from '../../models/encomenda.dto';

/**
 * Generated class for the NovaEncomendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-encomenda',
  templateUrl: 'nova-encomenda.html',
})
export class NovaEncomendaPage {

  codigo: string = "";

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaEncomendaPage');
  }

  busca_encomenda(codigo: string){
    
  }

}
