<template>
    <div class="informacoes">
        <img class="capainfo" :src="getPosterUrl(serie.poster_path)">
        <div class="detalhesinformacao">
            <h1>{{ serie.name }}</h1>
            <p>{{ serie.overview }}</p>
            <p>{{ serie.release_date }}</p>

            <div v-if="cast && cast.length">
                <h3>Elenco</h3>
                <ul>
                    <li v-for="actor in cast.slice(0,10)" :key="actor.cast_id">
                        {{ actor.name }} como {{ actor.character }}
                    </li>
                </ul>
            </div>
            <button class="voltar" @click="goBack">Voltar</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            return{
                serie: {}
            };
        },

        mounted(){
            this.fetchSeriesDetails()
        },

        methods:{
            async fetchSeriesDetails(){
                const serieId = this.$route.params.id;
                const apiKey = 'd04e93676bc55c0143c14589ace9b405';
                const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${apiKey}&language=pt-BR`;

                try{
                    const response = await axios.get(url);
                    this.serie = response.data
                } catch (error){
                    console.error('Error ao buscar detalhes da serie', error)
                }
            },

            async fetchSeriesCast(){
                const seriesId = this.$route.params.id;
                const apiKey = 'd04e93676bc55c0143c14589ace9b405';
                const url = `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${apiKey}&language=pt-BR`

                try{
                    const response = await axios.get(url);
                    this.cast = response.data.cast;
                }catch(error){
                    console.error('error ao buscar elenco da série', error)
                }
            },

            getPosterUrl(posterPath){
                return `https://image.tmdb.org/t/p/w300${posterPath}`
            },

            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style>
    .capainfo{
        height: 450px;
    }

</style>