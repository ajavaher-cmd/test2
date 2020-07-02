<template>
  <div >
      <v-container class="my-5">
            <v-layout row class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                  <v-btn small flat color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                      <v-icon left small>mdi-folder</v-icon>
                      <span class="caption text-lowercase">By project</span>
                  </v-btn>
                  </template>
                  <span>Sort by project</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ml-4" small flat color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                      <v-icon left small>mdi-account</v-icon>
                      <span class="caption text-lowercase">By person</span>
                  </v-btn>
                  </template>
                  <span>Sort by person</span>
                  </v-tooltip>
             </v-layout>
          <v-card v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
              <v-flex xs12 md6 class=" project">
                  <div class="caption grey--text">Project title</div>
                  <div>{{project.title}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Person</div>
                  <div>{{project.person}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Due by</div>
                  <div>{{project.due}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div>
                      <v-chip small :class="`white--text caption my-2 ${project.status}`">{{project.status}}</v-chip>
                  </div>
              </v-flex>
          </v-layout>
          </v-card>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'
export default {
  data() {
      return{
          projects: [
               ]
      }
  },
  methods: {
      sortBy(prop){
          this.projects.sort((a,b)=>a[prop]<b[prop] ? -1: 1)
      }
  },
  created() {
      db.collection('projects').onSnapshot(res=>{
          const changes=res.docChanges();

          changes.forEach(change=>{
              if (change.type==='added'){
                  this.projects.push({
                      ...change.doc.data(),
                      id:change.doc.id
                  })
              }
          })
      })
  }
}
</script>

<style>
.v-chip.complete{
    background-color: blue !important;
}
.v-chip.overdue{
    background-color: tomato !important;
}
.v-chip.ongoing{
    background: orange !important;
}
.project.ongoing{
    border-left: 4px solid orange;
}
.project.complete{
    border-left: 4px solid blue;
}
.project.overdue{
    border-left: 4px solid tomato;
}


</style>
