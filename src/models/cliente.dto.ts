import { EncomendaDTO } from "./encomenda.dto";

export interface ClienteDTO {
    nome: string;
    email: string;
    encomenda: EncomendaDTO[];
}