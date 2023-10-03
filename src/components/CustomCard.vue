<template>
     <div id="card-styles">
        <Card >
            <template #header>
                <img class="scale-up-element" alt="No Image" :src="imageLocation">
            </template>
            <template #title>
                {{ title }}
            </template>
                
            <template #content>
                <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
            </template>
                
        </Card>
     </div>
</template>

<script>
import Card from 'primevue/card'
export default{
    name:"customCard",
    props:{
        imageLocation : String,
        title : String
    },
    components:{
        Card
    }
}
</script>

