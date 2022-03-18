import { Component } from '@angular/core';
import { LoadingController, MenuController, NavController } from 'ionic-angular';
import { ReplaySubject } from 'rxjs';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';
import { EncomendasPage } from '../encomendas/encomendas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
     public menu: MenuController,
     public loginService: LoginService,
     public storage: StorageService,
     public loadingCtrl: LoadingController) {

  }

  login(){
    const navCtrl = this.navCtrl;
    const loader = this.presentLoadingTwo();
    this.loginService.authenticate(this.creds)
    .subscribe(async response => {
      const result = await this.loginService.successfulLogin(response.headers.get("Authorization"));
      loader.dismiss();
      if (result) {
        navCtrl.setRoot('EncomendasPage');
      }
    }, err => console.log)
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.loginService.logout();
  }

  registrar(){
    let loader = this.presentLoadingOne();
    this.navCtrl.push("RegistroPage", loader);
  }

  presentLoadingOne(){
    let loader = this.loadingCtrl.create({
        content: "Carregando..."
    });
    loader.present();
    return loader;
}

presentLoadingTwo(){
  let loader = this.loadingCtrl.create({
      content: "Logando..."
  });
  loader.present();
  return loader;
}

}
