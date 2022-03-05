import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login(){
    console.log(this.creds);
    this.navCtrl.setRoot("EncomendasPage");
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
