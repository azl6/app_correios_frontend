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

  novaEncomenda : EncomendaDTO = {
    codigo: "",
    enderecoDeEntrega: {
      id: "",
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      dataDeEnvio: "",
      previsaoDeEntrega: "",
      status: "",
      cliente: {
        id: "",
        nome: "",
        email: ""
      }
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaEncomendaPage');
  }

}
