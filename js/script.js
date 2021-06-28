Vue.config.devtools = true;

let number = 1;

const app = new Vue (
    {
        el: '#app',
        data: {

            pictures : [
                'img/Etretat Juin 2020_DSC_03701593167148126.jpg',
                'img/Etretat Juin 2020_DSC_04041593167148142.jpg',
                'img/Etretat Juin 2020_DSC_04091593167148144.jpg',
                'img/Italie septembre 2020_DSC_04881601329170243.jpg',
            ],
            pictureIndex: 0,
        },

        created() {

            setInterval (()=> {
                this.next();
            },6000)

        },

        methods: {
            next: function () {

                if (this.pictureIndex === (this.pictures.length - number)) {
                    this.pictureIndex = 0;

                } else{
                    this.pictureIndex ++;
                }
            },

            prev: function () {

                if (this.pictureIndex === 0) {
                    this.pictureIndex = this.pictures.length - number;

                }   else {
                    this.pictureIndex --;
                }              
        
            }   
        },

        pointNow: function (index) {

            if (index === this.pictureIndex) {
                return 'currentPic';

            } else {
                return '';
            }

        }

    }


);