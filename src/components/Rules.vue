<template>
  <div class="wrapper">
    
    <div class="section">
      
      <div class="rules">
        <div class="rules__title">
          <span class="ru typewriter js-type">{{msg.articles.ru['3'][0]}}</span>
          <span class="en typewriter js-type">{{msg.articles.en['3'][0]}}</span>
        </div>

        <ul class="rules__list">
          <li class="rules__item">
            <img src="../assets/4.1.2_icon_phone.svg" alt="">
            <div>
              <span  class="ru typewriter js-type">{{msg.articles.ru['3'][1]}}</span>
              <span  class="en typewriter js-type">{{msg.articles.en['3'][1]}}</span>
              </div>
          </li>
          <li class="rules__item">
            <img src="../assets/4.1.2_icon_no-video.svg" alt="">
            <div>
              <span  class="ru typewriter js-type">{{msg.articles.ru['3'][2]}}</span>
              <span  class="en typewriter js-type">{{msg.articles.en['3'][2]}}</span>
              </div>
          </li>
          <li class="rules__item">
            <img src="../assets/4.1.2_icon_no-food.svg" alt="">
            <div>
              <span  class="ru typewriter js-type">{{msg.articles.ru['3'][3]}}</span>
              <span  class="en typewriter js-type">{{msg.articles.en['3'][3]}}</span>
              </div>
          </li>
          <li class="rules__item">
            <img src="../assets/4.1.2_icon_no-pets.svg" alt="">
            <div>
              <span  class="ru typewriter js-type">{{msg.articles.ru['3'][4]}}</span>
              <span  class="en typewriter js-type">{{msg.articles.en['3'][4]}}</span>
              </div>
          </li>
        </ul>

      </div>

      <div class="excursion">

        <div class="excursion__wrapper">
          <div class="excursion__day">
            <span class="ru typewriter js-type">{{sobytie.articles.ru['5'][0]}}</span>
            <span class="en typewriter js-type">{{sobytie.articles.en['5'][0]}}</span>
          </div>
          <div class="excursion__name">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['5'][1]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['5'][1]}}</span>
          </div>
          <div class="excursion__time">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['5'][2]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['5'][2]}}</span>
          </div>
          <div class="excursion__book">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['5'][3]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['5'][3]}}</span>
          </div>
          <img class="excursion-dotFigure" src="../assets/croped-dot.svg" alt=""> 
        </div>
        
        <div class="excursion__wrapper">
          <div class="excursion__day">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['7'][0]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['7'][0]}}</span>
          </div>
          <div class="excursion__name">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['7'][1]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['7'][1]}}</span>
          </div>
          <div class="excursion__time">
            <span style="color: black;font-size: 1.8vw;text-align:center">
              <span  class="ru typewriter js-type">Начало</span>
              <span  class="en typewriter js-type">Begining</span>
            </span>
            {{sobytie.articles.ru['7'][2]}}
          </div>
          <div class="excursion__book">
            <span  class="ru typewriter js-type">{{sobytie.articles.ru['7'][3]}}</span>
            <span  class="en typewriter js-type">{{sobytie.articles.en['7'][3]}}</span>
          </div>
        </div>
        
      </div>

      <img class="rules-figure" src="../assets/scree-1-grey-figure.svg" alt="">
      
    </div>

  </div>
</template>

<script>

export default {
  name: 'Rules',
  props: {
    msg: Object,
    sobytie: Object
  },
  data(){
    return{
      currentSlide: 0,
      slides: []
    }
  },
  mounted() {
    this.slides = document.querySelectorAll('.excursion__wrapper');

    setTimeout(() => {
      this.onSlideChange();
    }, 16000);
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {

      if(this.currentSlide >= 1) {
        
        this.slides[this.currentSlide].style.transform = 'translateY(100%)';

        this.currentSlide = 0;

        this.slides[this.currentSlide].style.transform = 'translateY(0%)';
        
      }else{
        this.slides[this.currentSlide].style.transform = 'translateY(-100%)';
        
        this.currentSlide += 1;

        this.slides[this.currentSlide].style.transform = 'translateY(0%)';
      }
      
      setTimeout(() => {
        this.onSlideChange();  
      }, 16000);
      
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rules{
  width: 50%;
  padding-top: 2.7vw;
  position: relative;
  z-index: 5;
}
.rules__title{
  color: #239afc;
  text-transform: uppercase;
  text-align: left;
  font-size: 3.4vw;
  line-height: 1.25;
  font-weight: bold;
  padding-right: 25%;
  padding-left: 2vw;
  font-family: var(--heding-font);
}
.rules__list{
  padding-left: 2vw;
  margin-top: 4vw;
  list-style: none;
  font-family: var(--text-font);
}
.rules__item{
  display: flex;
  align-items: center;
  padding-right: 15%;
  text-align: left;
  margin-bottom: 4vw;
}
.rules__item img{
  max-width: 11%;
  margin-right: 3vw;
}
.rules__item > div{
  font-size: 2vw;
}
.rules-figure{
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  width: 31vw;
}

/*  */
.excursion{
  width: 50%;
  position: relative;
  z-index: 5;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}
.excursion__wrapper{
  padding-top: 2.7vw;
  padding-left: 3.2vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: all .85s ease-in-out;
}
.excursion .excursion__wrapper:nth-child(even){
  background: #239afc;
  color: white;
}
.excursion .excursion__wrapper:first-child{
  transform: translateY(0%);
}
.excursion .excursion__wrapper.active{
  transform: translateY(0%)!important;
}
.excursion__day{
  font-size: 3.4vw;
  line-height: 1.25;
  text-transform: uppercase;
  font-weight: bold;
  font-family: var(--heding-font);
}
.excursion__name{
  color: #239afc;
  text-transform: uppercase;
  font-size: 2.2vw;
  padding-right: 35%;

  margin-top: 2.7vw;
  min-height: calc((2.2vw * 1.25) * 3);
  font-family: var(--text-font);
}
.excursion .excursion__wrapper:nth-child(even) .excursion__name{
  color: white;
}
.excursion__time{
  margin-top: 3.6vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 4vw;
  padding: 1.7vw 3vw;
  border: 0.4vw solid #239afc;
  width: fit-content;
  font-family: var(--heding-font);
}
.excursion .excursion__wrapper:nth-child(even) .excursion__time{
  background: white;
  border-color: white;
  color: #239afc;
  display: flex;
  flex-direction: column;
}
.excursion__book{
  margin-top: 5vw;
  font-size: 2.2vw;
  text-align: center;
  padding: 0 10%;
  font-family: var(--text-font);
}
.excursion-dotFigure{
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
  width: 35vw;
}
.excursion-circlesFigure{

}
</style>
