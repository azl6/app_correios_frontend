import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
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
     public storage: StorageService) {

  }

  login(){
    const navCtrl = this.navCtrl;
    this.loginService.authenticate(this.creds)
    .subscribe(async response => {
      const result = await this.loginService.successfulLogin(response.headers.get("Authorization"));

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
    this.navCtrl.push("RegistroPage")
  }

}
