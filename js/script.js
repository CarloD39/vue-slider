Vue.config.devtools = true;

let number = 1;

const app = new Vue (
    {
        el: '#app',
        data: {

            pictures : [
                'https://wallpaperaccess.com/full/1336518.png',
                'https://files.wallpaperpass.com/2019/10/matrix%20wallpaper%20048%20-%201920x1080-768x432.jpg',
                'https://p4.wallpaperbetter.com/wallpaper/243/612/913/binary-coding-blue-matrix-technology-wallpaper-preview.jpg',
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
        
            },
            
    

            changeTo : function (index) {

                this.pictureIndex = index;
            },

            pointNow: function (index) {

                if (index === this.pictureIndex) {
                    return 'currentPic';
    
                } else {
                    return '';
                }
    
            }
        }

      

    }


);