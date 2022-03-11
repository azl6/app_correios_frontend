import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { LoginService } from '../../services/login.service';


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
     public loginService: LoginService) {

  }

  login(){
    this.loginService.authenticate(this.creds)
      .subscribe(response => {
        this.loginService.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('EncomendasPage');
      },
      error => {});   
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
