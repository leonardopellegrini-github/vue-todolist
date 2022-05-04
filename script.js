const app = new Vue({

  el: '#app',

  data:{
    lista: [
      'fare1',
      'fare2',
      'fare3'
    ],
    nuovo: '',
    fatto: false
  },

  
  methods:{

    aggiungiNuovo(){
      if(this.nuovo.length > 1){
        this.lista.push(this.nuovo)
      } else {
        alert("non hai inserito abbastanza caratteri")
      }
      
      },
    
    rimuoviRiga(indice){
      this.lista.splice(indice, 1)
    }
  


  }

})
