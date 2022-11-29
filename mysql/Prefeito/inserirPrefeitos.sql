select * form cidades;

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
--no caso não aceitavel entradas duplicadas