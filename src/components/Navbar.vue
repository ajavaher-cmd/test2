<template>
   <nav>
      <v-snackbar v-model="snackbar" top color="success">
         <span>awsome, you added a project</span>
         <v-btn @click="snackbar=false">close</v-btn>
      </v-snackbar>
      <v-toolbar app>
         <v-app-bar-nav-icon @click='drawer=!drawer'></v-app-bar-nav-icon>
         <v-toolbar-title flat app class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
         </v-toolbar-title>
         <v-spacer></v-spacer>

         
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey black--text"
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-2"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          router :to="link.route"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>



         <v-btn flat color="grey"> 
            <span>Sign out</span>
            <v-icon>mdi-exit-to-app</v-icon>
         </v-btn>
      </v-toolbar>
      <v-navigation-drawer fixed temporary height='500px' v-model="drawer" class="indigo">
         <v-layout column align-center="">
            <v-flex class="mt-5">
               <v-avatar size="100">
                  <img src="/avatar-1.png">
               </v-avatar>
               <p class="white--text subheading mt-1">The Net Ninja</p>
            </v-flex>
            <v-flex class="mt-4 mb-4">
               <Popup @projectAdded='snackbar=true'/>
            </v-flex>
         </v-layout>
      <v-list>
         <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
               <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
               <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
      </v-list>
      </v-navigation-drawer> 
   </nav>
</template>
<script>
import Popup from './Popup'
export default {
   components: {Popup},
  data() {
     return {
        drawer: false,
        snackbar: false,
        links: [
           {icon:'mdi-view-dashboard',text:'Dashboard',route:'/'},
           {icon:'mdi-folder',text:'My projects',route:'/projects'},
           {icon:'mdi-account',text:'Team',route:'/team'}
        ]
     }
  }  
}
</script>