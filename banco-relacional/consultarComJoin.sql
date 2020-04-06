select 
    e.nome as 'Nome Estado', 
    c.nome as 'Nome Cidade', 
    e.regiao as 'Região'
from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c 
    on e.id = c.estado_id;