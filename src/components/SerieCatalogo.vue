<template>
    <div class="series-page">
        <h2>Séries populares</h2>
        <div class="conteudofilme" v-if="series && series.length">
            <div class="areadosfilmes">
                <div class="serie-item" v-for="serie in series" :key="serie.id">
                    <h3>{{ serie.name }}</h3>
                    
                    <router-link :to="{name: 'DetalhesSeries', params: {id: serie.id}}"
                    v-on:click="storePreviousRoute">
                        <img class="capadofilme" :src="getPosterUrl(serie.poster_path)">
                    </router-link>
                </div>
            </div>
        </div>

        <div v-else>
            <p>Carregando Séries...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default{
        name: "SerieCatalogo",

        data(){
            return{
                series:[],
            }
        },

        async created(){
            this.fetchSeries()
        },

        methods:{
            async fetchSeries(){
                const apiKey = 'd04e93676bc55c0143c14589ace9b405';
                const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&page=1`;

                try{
                    const response = await axios.get(url);
                    this.series = response.data.results

                } catch (error){
                    console.error("error ao buscar a série", error)
                    this.series = [];
                }
            },

            getPosterUrl(posterPath){
                return `https://image.tmdb.org/t/p/w500${posterPath}`
            },

            storePreviousRoute(){
                sessionStorage.setItem('previousRoute', this.$route.name)
            }
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

.serie-item{
    border: solid 0px green;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}



</style>