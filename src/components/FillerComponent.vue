<template>
    <div id="filler-component-style">
        <div class="filler-wrapper">
            <div class="icon-container">
                <i :class="itemImage"></i>
            </div>
            <div class="filler-description">
                <h1>{{ title }}</h1>
                <p>{{ paragraph }}</p>
                <a href="#">Learn More <span><i class="pi pi-arrow-right"></i></span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name : "fillerComponent",
    props : {
        itemImage : String,
        title : String,
        paragraph : String
    }
}
</script>