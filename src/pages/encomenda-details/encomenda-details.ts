import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomendaDTO } from '../../models/encomenda.dto';

/**
 * Generated class for the EncomendaDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encomenda-details',
  templateUrl: 'encomenda-details.html',
})
export class EncomendaDetailsPage {

  encomenda: EncomendaDTO;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.encomenda = this.navParams.data;

    switch(this.encomenda.enderecoDeEntrega.status){
      case "PENDENTE_DE_ENVIO":
        this.encomenda.enderecoDeEntrega.status = "Pendente de envio";
        break;
      case "ENTREGUE":
        this.encomenda.enderecoDeEntrega.status = "Entregue";
        break;
      case "ENVIADO":
        this.encomenda.enderecoDeEntrega.status = "Enviado";
        break;
    }
    console.log(this.encomenda);
  }

}
