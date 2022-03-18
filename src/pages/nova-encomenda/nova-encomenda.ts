import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
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
  loader: any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpClient,
     public encomendaService: EncomendaService,
     public storage: StorageService,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController) {
  }

  busca_encomenda(codigo: string){
    const loader = this.presentLoadingOne();
    this.encomendaService.findByCodigo(codigo)
    .subscribe(response => {
      loader.dismiss();
      let usr: LocalUser = this.storage.getLocalUser();
      usr.cliente.encomenda[usr.cliente.encomenda.length] = response;
      this.storage.setLocalUser(usr); 

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

  ionViewWillEnter(){
    this.loader = this.presentLoadingTwo();
  }

  ionViewDidEnter(){
    this.loader.dismiss();
  }

  presentLoadingOne(){
    let loader = this.loadingCtrl.create({
        content: "Buscando encomenda..."
    });
    loader.present();
    return loader;
}

presentLoadingTwo(){
  let loader = this.loadingCtrl.create({
      content: "Carregando..."
  });
  loader.present();
  return loader;
}

}
