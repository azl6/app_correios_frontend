export interface EncomendaDTO {
    codigo : string;
    enderecoDeEntrega : {
        id,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        cliente: {
            id,
            nome,
            email
        };
    };
}