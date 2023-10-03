<template>
   <div id="nav-styles">
      <div class="nav-container">
         <Menubar :model="items">
            <template #start>
                  <h1>Logis</h1>
            </template>
            
         </Menubar>
    </div>
   </div>
</template>

<script>
import Menubar from 'primevue/menubar';

export default{
    name: "navBar",
    data() {
        return {
            items: [
                {
                   label:'Home',
                   class: 'drop-down-item'
                  
                },
                {
                   label:'About',
                  
                },
                {
                   label:'Services',
                   
                },
                {
                  label: 'Pricing'
                },
                {
                   label:'Drop Down',
                   items:[
                      {
                         label:'Drop Down 1',
                         class: 'drop-down-item'
                         
                      },
                      {
                        label : 'Deep Drop Down',
                        items:[
                           {
                              label : 'Drop Down 1',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 2',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 3',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 4',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 5',
                              class: 'drop-down-item'
                           }
                        ],
                        
                      },

                      {
                              label : 'Drop Down 2',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 3',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 4',
                              class: 'drop-down-item'
                           },
                           {
                              label : 'Drop Down 5',
                              class: 'drop-down-item'
                           },

                      
                   ]
                },
                
                {
                   label:'Contact'
                },
                {
                  label : 'Get a Quote',
                  class: 'custom-button',
                }
             ]
        }
    },
    components:{
        Menubar,
        
    }
}

</script>

