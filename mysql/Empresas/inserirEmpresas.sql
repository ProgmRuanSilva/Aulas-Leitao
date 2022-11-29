insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 999999999999),
    ('Vale', 88888888888888),
    ('Cielo', 77777777777777);

alter table empresas modify cnpj varchar(14);

--desc pra descrever tabelas
desc empresas;

desc prefeitos;
select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);