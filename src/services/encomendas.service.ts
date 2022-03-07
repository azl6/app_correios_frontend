import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs/Rx";
import { EncomendaDTO } from "../models/encomenda.dto";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class EncomendaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<EncomendaDTO[]>  {
        return this.http.get<EncomendaDTO[]>(`${API_CONFIG.baseUrl}/encomendas`);
    }
}