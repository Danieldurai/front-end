<template>
    <div id="carousel-style">
        <div class="carousel-container">
           
                <Carousel :value="items" :numVisible="1"  :numScroll="1"  :responsiveOptions="responsiveOptions"  class="custom-carousel" :circular="true" :autoplayInterval="1000">
                    <template #item="slotProps">
                        <img :src="slotProps.data.image"  alt="Image" />
                        <h4>{{ slotProps.data.name }}</h4>
                        <h5>{{ slotProps.data.position }}</h5>
                        <span><i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i></span>
                        <p>{{ slotProps.data.description }}</p>
                    </template>
                </Carousel>
            
        </div>
    </div>
</template>

<script>
import  Carousel   from "primevue/carousel";


export default{
    name:"carouselComponent",
    components: {
    Carousel,
    
  },
  methods:{
    printStuff(data){
        console.log(data)
    },
  },
  data() {
    return {
      activeIndex: 0, // Initial active index
      items: [
        {
          name : "Saul Goodman",
          position : "Ceo & Founder",
          description : "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
          image: require("../assets/img/testimonials/testimonials-1.jpg"),
          alt: "Image 1",
        },
        {
            name : "Sara Wilsson",
          position : "Designer",
          description : "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
          image: require("../assets/img/testimonials/testimonials-2.jpg"),
          alt: "Image 2",
        },
        {
            name : "Jena Karlis",
          position : "Store Owner",
          description : "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
          image: require("../assets/img/testimonials/testimonials-3.jpg"),
          alt: "Image 3",
        },
        {
            name : "Matt Brandon",
          position : "Freelancer",
          description : "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
          image: require("../assets/img/testimonials/testimonials-4.jpg"),
          alt: "Image 4",
        },
        {
            name : "John Larson",
          position : "Entrepreneur",
          description : "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
          image: require("../assets/img/testimonials/testimonials-5.jpg"),
          alt: "Image 5",
        },
        // Add more items as needed
      ],
      responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 1,
					numScroll: 1
				},
				{
					breakpoint: '600px',
					numVisible: 1,
					numScroll: 1
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
    };
  },
}
</script>