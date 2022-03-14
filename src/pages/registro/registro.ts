import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { ClienteDTO } from '../../models/cliente.dto';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  dados : ClienteDTO = {
    nome: "",
    email: "",
    senha: ""
  };
  
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: HttpClient,
      public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar(){

    let dadosNotTyped = {
      nome: this.dados.nome,
      email: this.dados.email,
      senha: this.dados.senha
    };

    console.log(dadosNotTyped)

    return this.http.post(
      `${API_CONFIG.baseUrl}/clientes/new`, 
      dadosNotTyped)
      .subscribe(response => {
        let alert = this.alertCtrl.create({
          title: 'Registro efetuado com sucesso!',
          enableBackdropDismiss: false,
          buttons: [
              {
                  text: 'Ok'
              }
          ]
      });
      alert.present();
      this.navCtrl.setRoot(HomePage)
      }, error => {});
  }

}
