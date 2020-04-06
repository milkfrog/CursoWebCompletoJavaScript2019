alter table empresas modify cnpj varchar(14);
alter table empresas_unidades modify sede boolean;

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 31276312631223),
    ('Vale', 31276242631223),
    ('Cielo', 31276312344223);

-- mostra a descricao da tabela (tipos, e nome das colunas/atributos)
desc empresas;
desc prefeitos;
desc empresas_unidades;

select * from empresas;
select * from cidades;


-- mysql usa o boolean como o tiny(1), entao salva true = 1 e false = 0
insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, TRUE),
    (1, 2, FALSE),
    (2, 1, FALSE),
    (2, 2, TRUE);

select * from empresas_unidades;