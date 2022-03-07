import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public encomendaService: EncomendaService) {
  }

  ionViewDidLoad() {
    console.log("entrou na funcao");
    this.encomendaService.findAll()
      .subscribe(response => {
        console.log("chegou na resposta");
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
