import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs/Rx";
import { EncomendaDTO } from "../models/encomenda.dto";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class EncomendaService {

    user : LocalUser = {
        token: "",
        email: ""
    }

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findAll() : Observable<EncomendaDTO[]>  {
        this.user = this.storage.getLocalUser();
        console.log(this.user);

        return this.http.get<EncomendaDTO[]>(`${API_CONFIG.baseUrl}/encomendas`, {headers: {"Authorization": "Bearer " + this.user.token}});
    }

    findByCodigo() : Observable<EncomendaDTO>  {
        this.user = this.storage.getLocalUser();
        console.log(this.user);

        return this.http.get<EncomendaDTO>(`${API_CONFIG.baseUrl}/encomendas`, {headers: {"Authorization": "Bearer " + this.user.token}});
    }

}