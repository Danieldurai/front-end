<template>
    <div id="middle-component-style">
        <div class="grid grid-nogutters grid-container" :style="getStyleObject(change)">
            <div class="lg:col-5 md:col-5 col-12  image-container">
                <img :src="getImageSource(itemImage)">
            </div>
            <div class="lg:col-7 md:col-7 col-12 description">
                <div>
                    <h2 class="description-title">{{ title }}</h2>
                    <h4 class="description-subtitle">{{ subtitle }}</h4>
                    <p class="description-paragraph">{{ paragraph }}</p>
                    <ul class="description-list">
                        <li v-for="listItem,index in listItems" :key="index"><i class="pi pi-check"/> {{ listItem }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"middleComponent",
    props:{
        itemImage: String,
        title : String,
        subtitle : String,
        paragraph : String,
        listItems : Array,
        change : Boolean
    },
    methods: {
        getImageSource(itemImage) {
            return require(`../assets/img/${itemImage}`);
        },
       
        getStyleObject(change) {
      if (change) {
        return {
          flexDirection: 'row-reverse'
        };
      } else {
        return {}; // No style applied if the condition is not met
      }
    },
    }
}
</script>

