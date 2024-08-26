<template>
  <div class="hello">
      <div class="header">
          <div class="menu">
              <div class="nome"> <a href="#">Dev Filmes</a> </div>

              <div class="opcmenu">
                <ul>
                  <router-link to="/"> <li>Home</li> </router-link>
                  <router-link to="/filmes"> <li>Filmes</li> </router-link>
                  <router-link to="/series"> <li>Séries</li> </router-link>
                </ul>
              </div>
          </div>
      </div>

      <div class="conteudocapa">
          <div class="descricapa">
            <div class="descricao">
              <h3>{{ movie.title }}</h3>

                <div >
                  <p>{{ movie.overview }}</p>
                </div>

                <div class="assista">
                  <a href="#" class="agora"> <p >Assista Agora</p> </a>
                  <a href="#" class="trailer"> <p >Assista o Trailer</p> </a>
                </div>
            </div>

            <div class="filmedestaque"><img class="filmedestaque" :src="capa"> </div>
          </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CapaSite',
  props:['capa'],

  mounted(){
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted(){
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(){
      const header = document.querySelector('.header');
      const scrollPosition = window.scrollY;

      if(scrollPosition > 100){
        header.classList.add('scroll-dark');

      }else{
        header.classList.remove('scroll-dark')
      }
    }
  },

  data(){
    return{
      movie :{}
    };
  },

  async created(){
    const movieId = 533535; 
    const apiKey = 'd04e93676bc55c0143c14589ace9b405';

    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
      this.movie = response.data;
    } catch (error){
      console.error('Erros ao buscar os dados do filme', error)
    }
  },
}
  
</script>

<style >
.assista{
  display: flex;
  border: solid 0px blueviolet;
}

.filmedestaque{
  border: solid 0px black;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin-left: -80px;
}

.assista .agora{
  border: solid 3px rgb(23, 141, 252);
  background-color: rgb(23, 141, 252);
  width: 180px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.assista .trailer{
  border: solid 3px white;
  width: 180px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.agora, .trailer, p{
  font-size: 18px;
}

.descricao{
  border: solid 0px black;
  width: 600px;
}

.descricao h3{
  font-size: 40px;
}

.conteudocapa{
  border: solid 0px red;
  display: flex;
  justify-content: center;
}

.descricapa{
  border: solid 0px green;
  height: 500px;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hello{
  border: solid 0px white;
  height: 675px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/capafilme.jpg');
  background-size: cover;
  background-position: inherit;
  width: 100%;
}

.header{
  border: solid 0px blue;
  width: 100%;
  height: 90px;
  display: flex;
  position: fixed;
  justify-content: center;
  transition: background-color 0.3s ease;
  background-color: rgba(0,0,0,0);
}

.areamenu.darken{
  background-color: black;
}

.menu{
  border: solid 0px orange;
  top: 0;
  width: 100%;
  transition: backgound-color 1s ease;
  z-index: 1000;
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header.scroll-dark{
  background-color: rgba(0,0,0,1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.infomenu{
  border: solid 2px orange;
  width: 1100px;
  height: 100px;
}

.opcmenu ul, a {
  display: flex;
  text-decoration: none;
  list-style-type: none;
  font-size: 30px;
}

.opcmenu ul a li{
  margin-left: 42px;
}

.opcmenu ul a li:hover{
  border-bottom: solid 4px blue;
  margin-bottom: -5px;
}

.nome a{
  text-decoration: none;
  font-size: 45px;
  background: linear-gradient(40deg, blue, rgb(70, 172, 255));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

</style>
