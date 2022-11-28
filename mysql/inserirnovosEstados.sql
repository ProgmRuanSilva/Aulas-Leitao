insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'SUl', 2.54)

insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51)

--note que ele continuará do 1001 pois ele sempre pega o mais novo
select * from estados