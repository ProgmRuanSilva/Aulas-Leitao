-- é importante vc colocar um apelido quando com muitas tabelas
select e.nome, c.nome regiao from estados e, cidades c 
WHERE e.id = c.estado_id;

--não funciona
select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região,
from estados e
inner join cidades c on e.id = c.estado_id