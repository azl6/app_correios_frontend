import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";
import { LocalUser } from "../models/local_user";
import { JwtHelper } from "angular2-jwt";
import { ClienteDTO } from "../models/cliente.dto";
import { ClienteService } from "./cliente.service";


@Injectable()
export class LoginService {

    cliente: ClienteDTO = {
        nome: "",
        email: "",
        encomenda: []
    }

    jwtHelper: JwtHelper = new JwtHelper;
    constructor(public http: HttpClient, public storage: StorageService, public clienteService: ClienteService) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let decodedEmail = this.jwtHelper.decodeToken(tok).sub;
        //aba de modificacao
        this.clienteService.findByEmail(decodedEmail, tok)
        .subscribe(response => {
            let user : LocalUser = {
                token: tok,
                email: decodedEmail,
                cliente: response
            };
            console.log("antes de salvar:")
            console.log(user)
            this.storage.setLocalUser(user);
            console.log("depois de salvar:")
            console.log(this.storage.getLocalUser())
        }, error => {});
        //fim da aba de modificacao
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}