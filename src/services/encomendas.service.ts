import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs/Rx";
import { EncomendaDTO } from "../models/encomenda.dto";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class EncomendaService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findAll() : Observable<EncomendaDTO[]>  {

        return this.http.get<EncomendaDTO[]>(`${API_CONFIG.baseUrl}/encomendas`, {headers: {"Authorization": "Bearer " + this.storage.getLocalUser().token}});
    }

    findLoggedUserEncomendas(){
        console.log("tentando puxar o localuser de findloggeduserencomendas")
        console.log(this.storage.getLocalUser());
        return this.storage.getLocalUser().cliente.encomenda;
    }

}