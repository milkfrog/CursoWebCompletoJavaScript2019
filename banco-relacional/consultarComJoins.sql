
select *, c.nome as Cidade, p.nome as Prefeito from cidades c inner join prefeitos p on c.id = p.cidade_id;

select *, c.nome as Cidade, p.nome as Prefeito
from cidades c
left join prefeitos p on c.id = p.cidade_id;


select *, c.nome as Cidade, p.nome as Prefeito
from cidades c
right join prefeitos p on c.id = p.cidade_id;

-- select * from cidades c full join prfeitos p on c.id = p.cidade_id;
-- fazendo o full no mysql:
select *, c.nome as Cidade, p.nome as Prefeito
from cidades c
left join prefeitos p on c.id = p.cidade_id
union
select *, c.nome as Cidade, p.nome as Prefeito
from cidades c
right join prefeitos p on c.id = p.cidade_id;