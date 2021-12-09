## Project movieflix, developer in curse Bootcamp DevSuperior 2.0. ##

## Figma: Screen prototypes

[https://www.figma.com/file/cOjZ9zvM7U9hrZrL3AReSA/Desafio-MovieFlix](https://www.figma.com/file/cOjZ9zvM7U9hrZrL3AReSA/Desafio-MovieFlix)

## Enghish description - System overview:

The MovieFlix system consists of a movie bank, which can be listed and evaluated by users. Users can be visitors (VISITOR) and members (MEMBER). Only member users can add assessments in the system.

When accessing the system, the user must log in. Only logged-in users can browse movies. Soon after logging in, the user goes to the movie listing, which shows the movies paged, sorted alphabetically by title. The user can filter the movies by genre.

When you select a movie from the listing, a detailpage is shown, where you can see all the information in the movie, as well as its ratings. If you are a member user, you can still record a valuation on this screen.

A user has a name, email, and password, and the email is their username. Each film has a title, subtitle, an image, release year, synopsis, and a genre. Member users can record reviews for movies. A single member user can leave more than one rating for the same movie.



<div align="center">
  <img src="https://github.com/rmotaop/rmotaop-movieflix/blob/main/assets/login.PNG" width="600" />
  <img src="https://github.com/rmotaop/rmotaop-movieflix/assets/blob/main/movieflix/new-acount.png" width="600" />
  <img src="https://github.com/rmotaop/rmotaop-movieflix/assets/blob/main/movieflix/action-movie.png" width="600" />
  <img src="https://github.com/rmotaop/rmotaop-movieflix/assets/blob/main/movieflix/movie-details.png" width="600" />

</div>

# Portugues Brasileiro - Sobre o Projeto:
MovieFlix é uma aplicação full stack web e mobile construída durante o **Bootcamp DevSuperior 2.0** (#BDS2), evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

A aplicação consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. 
Usuários podem ser visitantes (VISITOR) e membros (MEMBER). 
Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve efetuar login, pois apenas usuários logados podem navegar nos filmes. 
Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. 
O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

A aplicação também é totalmente responsiva e possui tela de cadastro. (Ambas as funcionalidades não eram obrigatórias para a conclusão do projeto e foi um bônus que resolvi implementar).

Link para a aplicação no netlify -> <a href="https://rmotaop-movieflix.netlify.app">MovieFlix</a> <br />

# Você pode acessar a aplicação com os usuários:
<p>VISITOR -> email: bob@gmail.com | senha: 123456</p>
<p>MEMBER -> email: ana@gmail.com | senha: 123456</p>

E caso queira, você também pode criar sua própria conta. Por padrão, novas contas criadas terão o perfil de membro (MEMBER) para que seja possível testar a funcionalidade de postar avaliações.

## Modelo Conceitual
![Modelo Conceitual](https://github.com/rmotaop/rmotaop-movieflix/blob/main/uml_Movieflix.PNG)

## Documentação da API
<a href="https://movieflix-rmotaop.herokuapp.com/swagger-ui.html">
  Swagger
</a>

# Tecnologias utilizadas
## Backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Frontend
- HTML / CSS / TypeScript
- ReactJS
- React Native
- Expo

## Implantação em produção
- Backend: Heroku
- Frontend: Netlify
- Mobile: Expo
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/rmotaop/movieflix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/rmotaop/movieflix.git

# entrar na pasta do projeto front-web
cd front-web

# instalar dependências
yarn

# executar o projeto
yarn start
```

## Mobile
```bash
# clonar repositório
git clone https://github.com/rmotaop/movieflix.git

# entrar na pasta do projeto mobile
cd mobile

# instalar dependências
yarn

# executar o projeto
expo start
```

# Autor

<a href="https://www.linkedin.com/in/reginaldo-mota-de-jesus-81248226/">  
  <img
     src="https://avatars.githubusercontent.com/u/51180061?v=4"   
     alt="Reginaldo Mota"
     width="80"
   />
<a/>