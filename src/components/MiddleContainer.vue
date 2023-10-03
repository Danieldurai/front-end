<template>
    <div id="middle-container-styles">
        <div class="grid grid-nogutters grid-container">
            <MiddleComponent v-for="item,index in items" :key="index" :itemImage="item.image" :title="item.title" :subtitle="item.subtitle" :paragraph="item.paragraph" :listItems="item.listItems" :change="item.rowReverse"  class="col-12" ></MiddleComponent>
        </div>
    </div>
</template>

<script>
import MiddleComponent from './MiddleComponent.vue';
export default{
    name:"middleContainer",
    components : {
        MiddleComponent
    },
    data(){
        return{
            items : [{image : 'features-1.jpg', 
                      title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
                      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      paragraph : null,
                      listItems : ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit."," Ullam est qui quos consequatur eos accusamus."],
                      rowReverse : false},

                      {image : 'features-2.jpg', 
                      title: "Corporis temporibus maiores provident",
                      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      paragraph : "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                      listItems : null,
                      rowReverse : true},

                      {image : 'features-3.jpg', 
                      title: "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas",
                      subtitle: "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.",
                      paragraph : null,
                      listItems : ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit."," Ullam est qui quos consequatur eos accusamus."],
                      rowReverse : false},

                      {image : 'features-4.jpg', 
                      title: "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in",
                      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      paragraph : "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                      listItems : null,
                      rowReverse : true}
                     ]
        }
    }
}
</script>