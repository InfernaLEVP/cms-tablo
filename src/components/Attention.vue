<template>
  <div class="wrapper">
    
    <div class="section">
      
      <div class="attention">

          <div class="attention__wrapper info">
            <img class="info-figure" src="../assets/blue-dot.svg" alt="">
              <div class="info__title">
                <span  class="ru typewriter js-type">{{attention.articles.ru['10'][0]}}</span>
                <span  class="en typewriter js-type">{{attention.articles.en['10'][0]}}</span>
              </div>
              <div class="info__date">
                <span  class="ru typewriter js-type">{{attention.articles.ru['10'][1]}}</span>
                <span  class="en typewriter js-type">{{attention.articles.en['10'][1]}}</span>
              </div>
              <div class="info__content">
                <span  class="ru typewriter js-type">{{attention.articles.ru['10'][2]}}</span>
                <span  class="en typewriter js-type">{{attention.articles.en['10'][2]}}</span>
              </div>
              <div class="info__accent">
                <span  class="ru typewriter js-type">{{attention.articles.ru['10'][3]}}</span>
                <span  class="en typewriter js-type">{{attention.articles.en['10'][3]}}</span>
              </div>
              <div class="info__sub">
                <span  class="ru typewriter js-type">{{attention.articles.ru['10'][4]}}</span>
                <span  class="en typewriter js-type">{{attention.articles.en['10'][4]}}</span>
              </div>
          </div>


          <div class="attention__wrapper map">
              <div class="map__info">
                <div class="map__location">
                  <span  class="ru typewriter js-type">{{map.articles.ru['6'][0]}}</span>
                  <span  class="en typewriter js-type">{{map.articles.en['6'][0]}}</span>
                </div>
                <div class="map__name">
                  <span  class="ru typewriter js-type">{{map.articles.ru['6'][1]}}</span>
                  <span  class="en typewriter js-type">{{map.articles.en['6'][1]}}</span>
                </div>
              </div>
              
              <div class="map__map">
                  <img src="../assets/screen-path.svg" alt="">
              </div>
          </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Attention',
  props: {
    attention: Object,
    map: Object
  },
  data(){
    return{
      currentSlide: 0,
      slides: []
    }
  },
  mounted() {
    this.slides = document.querySelectorAll('.attention__wrapper');

    setTimeout(() => {
      this.onSlideChange();
    }, 16000);
  },
  methods: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.attention{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    padding: 0;
}

.attention__wrapper{
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform .85s ease-in-out;
}
.attention__wrapper:nth-child(2){
    transform: translateY(100%);
}

.info{
    background: #01e58d;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    padding-top: 9vw;
    position: relative;
}

.info-figure{
  position: absolute;
  top:0;
  right: 0;
  z-index: 5;
  transform: translateX(40%);
}

.info__title{
    font-size: 6vw;
    text-transform: uppercase;
    color: white;
    margin-bottom: 3vw;
    font-family: var(--heding-font);
}

.info__date{
    font-size: 4vw;
    text-transform: uppercase;
    margin-bottom: 1.7vw;
}

.info__content{
    font-size: 2.3vw;
    margin-bottom: 3.6vw;
}

.info__accent{
    font-size: 2.7vw;
    padding: 2.2vw 3.3vw;
    background: white;
    margin-bottom: 5vw;
}

.info__sub{
    font-size: 1.7vw;
}

/*  */
.map__info{
    position: absolute;
    bottom: 5vw;
    left: 3vw;
    width: 23%;
}
.map__location{
    font-size: 2.2vw;
    margin-bottom: 2vw;
    padding-right: 14%;
}

.map__name{
    font-size: 3.3vw;
    text-transform: uppercase;
    line-height: 1.25;
    letter-spacing: 1.5px;
    font-family: var(--heding-font);
}

.map__map{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.map__map img{
  margin-right: 61px;
  margin-top: 60px;
  width: auto;
  max-height: 85vh;
}


</style>
