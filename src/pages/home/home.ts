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
      const request = new Promise((resolve, reject)=> {
        this.loginService.authenticate(this.creds)
        .subscribe(response => {
          this.loginService.successfulLogin(response.headers.get("Authorization"));
          //console.log("Isso deve rodar primeiro");
          resolve("oi")
        }, () => reject(console.log("ERRO!")))
      });
      
      request.then(() => {
        this.navCtrl.setRoot('EncomendasPage')
      })
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
