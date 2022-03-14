import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomendaDTO } from '../../models/encomenda.dto';
import { LocalUser } from '../../models/local_user';
import { EncomendaService } from '../../services/encomendas.service';
import { StorageService } from '../../services/storage.service';
import { EncomendasPage } from '../encomendas/encomendas';

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
     public http: HttpClient,
     public encomendaService: EncomendaService,
     public storage: StorageService,
     public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaEncomendaPage');
  }

  busca_encomenda(codigo: string){
    this.encomendaService.findByCodigo(codigo)
    .subscribe(response => {
      console.log("Encomenda encontrada!")
      let usr: LocalUser = this.storage.getLocalUser();
      usr.cliente.encomenda[usr.cliente.encomenda.length] = response;
      this.storage.setLocalUser(usr); 
      console.log("localStorage após procurar encomenda!")
      console.log(this.storage.getLocalUser());
      let alert = this.alertCtrl.create({
        title: 'Encomenda adicionada!',
        enableBackdropDismiss: false,
        buttons: [
            {
                text: 'Ok'
            }
        ]
    });
    alert.present();
    this.navCtrl.setRoot(EncomendasPage)
    }, error => {})
  }

}
