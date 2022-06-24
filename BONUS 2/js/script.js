var app = new Vue(
    {
        el: '#app',
        data: {
            currentSelectedElement: 0,

            autoPlayStart: null,

            slides:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
            ],    
              
        },
        methods: {
            nextThumb() {
                if(this.currentSelectedElement < this.slides.length - 1) {
                    this.currentSelectedElement++;
                } else {
                    this.currentSelectedElement = 0;
                }
            },

            previousThumb() {
                if(this.currentSelectedElement > 0) {
                    this.currentSelectedElement--;
                } else {
                    this.currentSelectedElement = this.slides.length - 1;
                }
            },

            smallThumbSelect(elementIndex) {
                this.currentSelectedElement = elementIndex;
            },
            
        },
        mounted() {
            this.autoPlayStart = setInterval(this.nextThumb, 3000);
        }
    }
)
