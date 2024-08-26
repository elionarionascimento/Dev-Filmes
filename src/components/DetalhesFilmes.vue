<template>
    <div class="informacoes">
        <img class="capainfo" :src="getPosterUrl(movie.poster_path)">
        <div class="detalhesinformacao">
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.overview }}</p>
            <p>Data de Lançamento: {{ movie.release_date }}</p>

            <!-- Exibindo o elenco -->
            <div v-if="cast && cast.length">
                <h3>Elenco:</h3>
                <ul>
                    <li v-for="actor in cast.slice(0, 10)" :key="actor.cast_id">
                        {{ actor.name }} como {{ actor.character }}
                    </li>
                </ul>
            </div>
            
            <button class="voltar" @click="goBack">Voltar</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            movie: {},
            cast: [] // Adicionando o campo cast para armazenar o elenco
        };
    },

    mounted() {
        this.fetchMovieDetails();
        this.fetchMovieCast(); // Buscar o elenco ao montar o componente
    },

    methods: {
        async fetchMovieDetails() {
            const movieId = this.$route.params.id;
            const apiKey = 'd04e93676bc55c0143c14589ace9b405';
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`;

            try {
                const response = await axios.get(url);
                this.movie = response.data;
            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error);
            }
        },

        async fetchMovieCast() {
            const movieId = this.$route.params.id;
            const apiKey = 'd04e93676bc55c0143c14589ace9b405';
            const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=pt-BR`;

            try {
                const response = await axios.get(url);
                this.cast = response.data.cast; // Armazenando o elenco
            } catch (error) {
                console.error('Erro ao buscar elenco do filme:', error);
            }
        },

        getPosterUrl(posterPath) {
            return `https://image.tmdb.org/t/p/w500${posterPath}`;
        },

        goBack() {
            this.$router.go(-1); 
        }
    }
}
</script>

<style>
    .informacoes{
        border: solid 0px orange;
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }

    .capainfo{
        width: 300px;
    }

    .detalhesinformacao{
        border: solid 0px green;
        width: 700px;
        margin-left: 15px;
    }

    .voltar{
        background: linear-gradient(40deg, blue, rgb(70, 172, 255));
        width: 100px;
        font-size: 25px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }


</style>