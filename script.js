const app = new Vue({

  el: '#app',

  data:{
    lista: [
      'fare1',
      'fare2',
      'fare3'
    ],
    nuovo: ''
  },

  
  methods:{

    aggiungiNuovo(){
        this.lista.push(this.nuovo)
      }
      
    }

})
