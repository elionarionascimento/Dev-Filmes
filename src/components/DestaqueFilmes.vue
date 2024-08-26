<template>
    <div class="oi">
        <div class="titulo1">
            <h3 class="titulo">Top Filmes</h3>
        </div>
        <hr>

<div class="areaprimeiro">

        <a class="botoes" @click="mover" href="javascript:void(0)">&laquo;</a>
            <div class="areadentroprimeiro">
                <div class="populares" :style="{marginLeft: marginLeft + 'px'}">

                    <div class="titulos1" v-for="movie in movies" :key="movie.id">

                        <router-link :to="{name: 'DetalhesFilmes', params: {id: movie.id}}">
                            <img class="capa" :src="getPosterUrl(movie.poster_path)">
                        </router-link>
                        
                        {{ movie.title }} 
                    
                    </div>
                </div>
            </div>
        <a class="botoesvolt" @click="voltar" href="javascript:void(0)">&raquo;</a>
</div>   
    </div>
</template>

<script>
import axios from 'axios';

    export default{
        name: "DestaqueFilmes",

        data(){
            return{
                movies:[],
                marginLeft: 0,
                contador: 1
            };
        },

        created(){
            this.fetchMovies();
        },

        methods:{
            async fetchMovies(){
                const apiKey = 'd04e93676bc55c0143c14589ace9b405';
                const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

                try{
                    const response = await axios.get(url);
                    this.movies = response.data.results;
                } catch(error){
                    console.error('Erro ao buscar filmes:', error)
                }
            },

            getPosterUrl(posterPath){
                return `https://image.tmdb.org/t/p/w500${posterPath}`
            },

            mover(){
            if(this.contador == 1){
              this.marginLeft -= 945
              this.contador++
              console.log(this.contador)
            } else if(this.contador == 2){
                this.marginLeft -= 942
                this.contador++
                console.log(this.contador)
            } else if(this.contador == 3){
                this.marginLeft -= 939
                this.contador++
                console.log(this.contador)
            } else if(this.contador == 4){
                this.marginLeft -= 790
                this.contador++
                console.log(this.contador)
            } else if(this.contador == 5){
                this.marginLeft -= 0
            }
          },

          voltar(){
            if(this.contador == 5){
                this.marginLeft += 790
                this.contador--
                console.log("menos", this.contador)
            } else if(this.contador == 4){
                this.marginLeft += 939
                this.contador --
                console.log("menos", this.contador)

            } else if(this.contador == 3){
                this.marginLeft += 942
                this.contador --
                console.log("menos", this.contador)

            } else if(this.contador == 2){
                this.marginLeft += 945
                this.contador --
                console.log("menos", this.contador)
        }
    }
}
}
</script>

<style>
.botoes{
    border: solid 0px white;
    font-size: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 160px;
}

.botoesvolt{
    border: solid 0px white;
    font-size: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 160px;
    margin-left: 13px;
}

.titulo1{
    border: solid 0px green;
    display: flex;
    justify-content: center;
    height: 60px;
}

.titulo{
    font-size: 30px;
}

.capa{
  width: 217px;
  border-radius: 8px;
}


.areaprimeiro{
  border: solid 0px white;
  height: 410px;
  display: flex;
  justify-content: center;
}

.areadentroprimeiro{
  border: solid 0px orange;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
}

.populares{
  border: solid 0px red;
  display: flex;
  width: 4700px;
  height: 380px;
  transition: 0.3s;
}

.titulos1{
  margin-left: 15px;
  border: solid 0px blue;
  width: 220px;
}

.top{
    border: solid 2px orange;
    height: 400px;
}

.oi{
    border: solid 0px orange;
    height: 400px;
}

.oi hr{
    width: 90%;
    height: 3px;
    border: 0;
    background: linear-gradient(40deg, blue, rgb(70, 172, 255));
}
</style>