INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);

INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Ficção');



INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Tribos da Europa', 'The future is not what you expected.', 2021, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ewEgxHvSJnQxH4nwYUr8yajqHOQ.jpg', 'Em 2070, três irmãos lutam para mudar o destino da Europa após uma catástrofe global ter dividido o continente em microestados que disputam o poder.', 11);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Cherry - Inocência Perdida', 'A vida deixa marcas..', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kzXUQnrUnHUGHuwWbgf9KpoU3qr.jpg', 'Cherry deixa a faculdade para se tornar médico no Iraque, apoiado por sua amada, Emily. Ao voltar da guerra com estresse pós-traumático, se envolve com crime e drogas enquanto luta para reconquistar seu lugar no mundo.', 11);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Dia do Sim', 'Por 24 horas, as crianças fazem as regras.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cJwkku3SPprS0Splfgh8VFRd0xn.jpg', 'Cansado de dizer não para tudo, um casal permite que os filhos ditem as regras durante um dia inteirinho. Essa vai ser uma aventura e tanto!', 9);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Diários de um Vampiro ', 'You remember your first kiss forever... and ever.', 2009, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kFTX3MEt7GAas2JNODVERV9Uu21.jpg', 'Elena tenta sobreviver entre os seres sobrenaturais que vivem em segredo. Ela se apaixona pelo misterioso Stefan, mas o retorno do seu irmão, Damon, ameaça essa paixão.', 11);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Lúcifer', 'É bom ser mau.', 2016, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vauFEN12Exuck3nO9WWmjB1R5cJ.jpg', 'Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.', 11);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Rota de Fuga 3: O Resgate', 'Prepare-se para os danos.', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg', 'O especialista em segurança Ray Breslin e sua equipe devem realizar uma missão de resgate mortal para salvar sua namorada e a filha sequestrada de um magnata da tecnologia de Hong Kong de uma formidável prisão letã.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Liga da Justiça de Zack Snyder ', 'Caído. Ressuscitado. Unidos.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg', 'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Um Homem Comum', 'Um Homem Comum', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/b48yqgYlaA9EZdCjh1EAtPe12fY.jpg', 'A história segue um criminoso de guerra na clandestinidade (Kingsley), que inicia um relacionamento com sua empregada, uma atriz islandesa em ascensão. Quando as buscas para o encontrarem ficam mais intensas, ele percebe que ela é única pessoa em que pode confiar.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Pagando Bem, Que Mal Tem? ', 'What would you do to get out of debt?', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qCSLKtNrL9xIyw2kjzi0GEUvqXx.jpg', 'Zack Brown (Seth Rogen) e Miriam Linky (Elizabeth Banks) são amigos há muito tempo, sendo que atualmente dividem uma casa e possuem diversas dívidas. Após terem a água e a luz cortadas, eles resolvem fazer um filme pornô caseiro para conseguir algum dinheiro. Desta forma selecionam alguns amigos para ajudá-los, jurando que o sexo não irá prejudicar a amizade existente. Só que, quando as gravações começam, o negócio se torna algo bem maior do que imaginavam.', 9);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Carga Explosiva 3', 'Carga Explosiva 3', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/v7hHxGSbL5gE0y8MuJvkgI44KsC.jpg', 'Frank Martin (Jason Statham) é obrigado a conduzir Valentina (Natalya Rudakova), a filha de Leonid Vasilev (Jeroen Krabbé), o chefe da Agência de Proteção Ambiental da Ucrânia. Ela foi sequestrada por Jonas Johnson (Robert Knepper), contratado por uma empresa de gerenciamento internacional de resíduos que deseja operar na Ucrânia. Para ter Frank e Valentina sob controle, Jonas prende em seus pulsos um dispositivo que determina que não possam se afastar muito do carro que os conduz, caso contrário o bracelete explode. Contando com a ajuda do inspetor Tarconi (François Berléand), Frank busca um meio de deixar a armadilha.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('O Reino Proibido', 'The battle for eternity is the fantasy of a lifetime.', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/aNKhC2nzGr3kAggKubJ56MbFOUc.jpg', 'Jason, um adolescente americano, é um grande fã do cinema de Hong Kong e de velhos filmes de kung-fu. Ao visitar uma loja de penhores em Chinatown, ele descobre a arma de um sábio chinês antigo e guerreiro, o Rei Macaco. A relíquia mágica transporta Jason de volta no tempo e ele se junta a um grupo de lendários artistas marciais em uma missão para libertar um homem preso.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Zona de Combate', 'Defiant by design.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg', 'Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Venom: Tempo de Carnificina (2021)', 'Venom: Let There Be Carnage', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg', 'Em busca de seu próximo furo de reportagem, o jornalista Eddie Brock consegue uma entrevista exclusiva com Cletus Kasady, um assassino no corredor da morte, que descobre o segredo de Eddie e se torna o hospedeiro de Carnificina, um simbionte aterrorizante e ameaçador. Eddie e Venom precisam superar sua relação atribulada e trabalhar em conjunto para derrotar Carnificina.', 12);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Homem-Aranha: Através do Verso-Aranha - Parte Um', 'Em Produção', 2022, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/brEz4q9qCC9sKOsW2q40k0BLLci.jpg', 'A história de Miles Morales e a web #SpiderVerse se expandem. Dê uma olhada primeiro em Homem-Aranha: Across the Spider-Verse (Parte Um). Exclusivamente nos cinemas em outubro de 2022.', 8);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme envolvente, incrível a história e roteiro do filme.', 42, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme muito estranho, pesado, não gostei nao!', 42, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme é muito perturbador, nos trás a realidade vivida por muitas mulheres.', 43, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Apesar de ser novo já assiste duas vezes, não canso de ver esse filmeee.', 44, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme bacana, mas da um certo tédio', 45, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('A história é interessante, mas não nos deixa com vontade de ver novamente', 46, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('O melhor filme que já passou na sessão da tarde!!!', 47, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Liga da justiça é muito bom, shoow, terá mais? Sim, sim, sim', 48, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Considero esse filme muito ruim, só acho', 49, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme é uma comédia do início ao fim, ha ha ha', 50, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme devia estar como máxima no IMDb,  filmaço', 51, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Eu acho muito chato esses filmes de luta, não curto', 52, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme promete muito tal qual p promeiro,  filmaço', 53, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Eu acho que esse filme abre muitas portas e discussões sobre vários temas', 54, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Eu acho muito chato esses filmes de luta, não curto', 55, 1);

