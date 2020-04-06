select * from cidades;

insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

select * from prefeitos;

insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null);


-- entrada duplicada, da erro devido a restrição:
insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Pinheiro', 3);



