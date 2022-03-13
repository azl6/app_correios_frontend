export interface EnderecoDTO {
    codigo : string;
    enderecoDeEntrega : {
        id,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        dataDeEnvio: string,
        previsaoDeEntrega: string,
        status: string,
        cliente: {
            id,
            nome,
            email
        };
    };
}