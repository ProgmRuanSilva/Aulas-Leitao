--lembre-se de usar where (risco de atualizar o banco todo e ser demitido)
update estados
set nome = 'Maranhão'
where sigla = 'MA'

--est seria um suposto apelido
SELECT est.nome FROM estados est WHERE sigla = 'MA'

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'
--normalmente usamos a chave primaria pra o update

SELECT est.nome, sigla, populacao FROM estados est WHERE sigla = 'PR'
--quando há multiplas colunas na mesma coluna use apelido