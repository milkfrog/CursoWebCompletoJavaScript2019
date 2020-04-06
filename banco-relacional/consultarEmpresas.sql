select e.nome as Empresa, c.nome as Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
-- and sede = 1;
-- and sede;
and sede = TRUE;
-- tanto sede = 1, como sede = true ou até mesmo só sede funciona.

