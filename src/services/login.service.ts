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

    successfulLogin(authorizationValue: string): Promise<any> {
        return new Promise((resolve, reject) => {

            const token = authorizationValue.substring(7);
            const email = this.jwtHelper.decodeToken(token).sub;

            this.clienteService.findByEmail(email, token)
                .subscribe(cliente => {
                    const user: LocalUser = {
                        token,
                        email,
                        cliente
                    }

                    this.storage.setLocalUser(user);
                    resolve(true);
                }, err => reject(err));
        })

    }

    logout() {
        this.storage.setLocalUser(null);
    }
}