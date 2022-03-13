import { EncomendaDTO } from "./encomenda.dto";
import { EnderecoDTO } from "./endereco.dto";

export interface ClienteDTO {
    nome: string;
    email: string;
    encomenda: EncomendaDTO[];
    endereco?: EnderecoDTO[];
}