const app = new Vue (
    {
        el: '#app',
        data: {

            pictures : [
                'https://d3aux7tjp119y2.cloudfront.net/original_images/f5510725-Anders20Ekholm-Folio2028129-IBSweb_BAPCCG2.jpg',
                'https://www.vintagerides.travel/wp-content/uploads/voyage-moto-kirghizistan-motorcycle-tour-kyrgyzstan-1-scaled.jpg',
                'https://media.timeout.com/images/105590957/630/472/image.jpg',
                'https://images.france.fr/zeaejvyq9bhj/6s7ixdfkSkq66Sy84ui8M6/a66d3814252dd6e6c8169d15195cf29a/mafate-reunion-island-irt-frog-974-photographies.jpg'
            ],
            pictureIndex: 0,
        },

        methods: {
            next: function () {
                if (this.pictureIndex === (this.pictures.lenght - 1)) {
                    this.pictureIndex = 0;

                } else{
                    this.pictureIndex++;
                }
            },

            prev: function() {
                if (this.pictureIndex === 0){
                    this.pictureIndex = this.pictures.lenght - 1 ;

                } else {
                    this.pictureIndex--;
                }

            }
        }

        



    }

)