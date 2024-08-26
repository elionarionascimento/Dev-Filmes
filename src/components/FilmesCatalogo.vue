<template>
    <div class="movies-page"> 
        <h2>Filmes Populares</h2>
        <div class="conteudofilme" v-if="movies && movies.length">
            <div class="areadosfilmes">
                <div class="movie-item" v-for="movie in movies" :key="movie.id">
                    <h3>{{ movie.title }}</h3>

                    <router-link :to="{name: 'DetalhesFilmes', params: {id: movie.id}}"
                    v-on:click="storePreviousRoute">
                        <img class="capadofilme" :src="getPosterUrl(movie.poster_path)">
                    </router-link>
                </div>
            </div>
        </div>
        
    <div v-else>
        <p>Carregando filmes...</p>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default{
        name: "FilmesCatalogo",

        data(){
            return{
                movies:[],
            };
        },

        async created(){
            this.fetchMovies();
        },

        methods:{
           async fetchMovies(){
            const apiKey = 'd04e93676bc55c0143c14589ace9b405';
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
            try{
                const response = await axios.get(url);
                this.movies = response.data.results;
            } catch (error){
                console.error("error ao buscar o filme", error)
                this.movies = [];
            }
        },

        getPosterUrl(posterPath){
            return `https://image.tmdb.org/t/p/w500${posterPath}`;
        },

        storePreviousRoute(){
            sessionStorage.setItem('previousRoute', this.$route.name)
        },

        }
    }
</script>

<style>


.conteudofilme{
    border: solid 0px white;
    display: flex;
    justify-content: center;
}

.capadofilme{
    width: 300px;
    margin-left: 10px;
}

.areadosfilmes{
    border: solid 0px blue;
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.movie-item{
    border: solid 0px green;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>