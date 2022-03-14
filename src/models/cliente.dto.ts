import { EncomendaDTO } from "./encomenda.dto";
import { EnderecoDTO } from "./endereco.dto";

export interface ClienteDTO {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
    encomenda?: EncomendaDTO[];
    endereco?: EnderecoDTO[];
}