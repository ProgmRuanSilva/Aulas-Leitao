create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidades (id) 
);
--a uma discução do uso de 1 pra 1.
--join é uma consulta mais lenta que se vc colocar em uma tabela só.

select * from estados