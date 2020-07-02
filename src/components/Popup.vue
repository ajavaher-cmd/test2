<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Enter new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Add new project
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="info" v-model="content" prepend-icon="mdi-pen"></v-textarea>

                <v-menu
        v-model="menu2"
        :close-on-content-click="true"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Enter due date"
            prepend-icon="mdi-date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>

                <v-btn flat class="success mt-3" @click="submit" :loading="loading">Add project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div> 
</template>

<script>
import db from '@/fb'
export default {
    data(){
        return {
            title: '',
            content: '',
            date:null,
            inputRules: [
                v => v.length >= 3 || 'minumum three chars'
            ],
            loading: false
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()){
                const project={
                    title:this.title,
                    content:this.content,
                    person:'Ali',
                    status:'ongoing',
                    date: this.date
                }
                this.loading=true;
                db.collection('projects').add(project).then(()=>{
                  this.loading=false;
                  this.$emit('projectAdded')
                  })
            }
            else {
                console.log('not valid')
            }
        }
    }
}
</script>