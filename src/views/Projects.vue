<template>
  <div class="about">
    <v-container>
      <template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(project,i) in myProjects"
      :key="i"
    >
      <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{project.content}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data(){
     return{
          projects: [
         ]
      }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project =>{
        return project.person === 'Ali'
      })
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
