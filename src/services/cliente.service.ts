import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { ClienteDTO } from "../models/cliente.dto";
import { EncomendaDTO } from "../models/encomenda.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class ClienteService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findByEmail(email: string, authorizationValue: string) : Observable<ClienteDTO>  {

        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/${email}`, {headers: {"Authorization": "Bearer " + authorizationValue}});
    }
}