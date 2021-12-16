
// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.



// Bonus:
// 1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
// Consigli del giorno:
// Leggete sempre la documentazione, partite dalle cose basilari per poi aggiungere complessità.
// Ricordiamo sempre che è necessario capire bene prima che dati dobbiamo andare a manipolare.
// Buon lavoro e buon divertimento!

var app = new Vue({
    el: '#app',
    data: {

        counter: null,
        images: [
        //   "image1.jpg",
        //   "image2.jpg",
        //   "image3.jpg",
        //   "image4.jpg"
      ]


    },

    

    methods: {
        prev: function () {
            this.counter -= 1;

            if (this.counter < 0) {
                this.counter = this.images.length - 1;
            }
        },

        next: function () {
            this.counter += 1;

            if (this.counter > this.images.length - 1) {
                this.counter = 0;
            }
        },

        
    },

    created() {
        this.images = [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg"
        ],

        this.counter = 0;

    
        setInterval(() => {
            this.counter += 1;

            if (this.counter > this.images.length - 1) {
                this.counter = 0;
            }

            console.log(this.counter);
        }, 2000)
    
    }


  })