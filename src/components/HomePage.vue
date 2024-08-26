<template>
    <div>
        <DestaqueFilmes></DestaqueFilmes>
        <DestaqueSerie></DestaqueSerie>
    </div>
</template>

<script>
import DestaqueFilmes from './DestaqueFilmes.vue'
import DestaqueSerie from './DestaqueSerie.vue'

    export default{
        name: 'HomePage',

        components:{
            DestaqueFilmes,
            DestaqueSerie
        }
    }
</script>