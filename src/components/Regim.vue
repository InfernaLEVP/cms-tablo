<template>
  <div class="wrapper">
    
    <div class="section">
        
        <div class="info">
          
          <div class="info__wrapper">
              <div class="info__name">
                <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][0]}}</span>
                <span  class="en typewriter js-type">{{excursion.articles.en['11'][0]}}</span>
              </div>
              <div class="info__description">
                <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][1]}}</span>
                <span  class="en typewriter js-type">{{excursion.articles.en['11'][1]}}</span>
              </div>
              <div class="info__excursion">
                  <span>
                    <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][2]}}</span>
                    <span  class="en typewriter js-type">{{excursion.articles.en['11'][2]}}</span>
                  </span>
                  <span>
                    <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][3]}}</span>
                    <span  class="en typewriter js-type">{{excursion.articles.en['11'][3]}}</span>
                  </span>
                  <span>
                    <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][4]}}</span>
                    <span  class="en typewriter js-type">{{excursion.articles.en['11'][4]}}</span>
                  </span>
                  <span>
                    <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][5]}}</span>
                    <span  class="en typewriter js-type">{{excursion.articles.en['11'][5]}}</span>
                  </span>
                  <span>
                    <span  class="ru typewriter js-type">{{excursion.articles.ru['11'][6]}}</span>
                    <span  class="en typewriter js-type">{{excursion.articles.en['11'][6]}}</span>
                  </span>
              </div>
          </div>
          <div class="info__wrapper">
              <div class="info__name">
                <span  class="ru typewriter js-type">{{gid.articles.ru['12'][0]}}</span>
                <span  class="en typewriter js-type">{{gid.articles.en['12'][0]}}</span>
              </div>
              <div class="info__description">
                <span  class="ru typewriter js-type">{{gid.articles.ru['12'][1]}}</span>
                <span  class="en typewriter js-type">{{gid.articles.en['12'][1]}}</span>
              </div>
              <div class="info__qr">
                  <canvas id="qrCode"></canvas>
              </div>
          </div>

          <div class="info__figure">
            <img src="../assets/figure-left-top.svg" alt="">
          </div>
        </div>

        <div class="regim">
            <div class="regim__name">
              <span  class="ru typewriter js-type">{{regim.articles.ru['13'][0]}}</span>
              <span  class="en typewriter js-type">{{regim.articles.en['13'][0]}}</span>
            </div>
            <div class="regim__week">
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][1]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][1]}}</span>
                </span>
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][2]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][2]}}</span>
                </span>
            </div>
            <div class="regim__weekEnd">
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][3]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][3]}}</span>
                </span>
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][4]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][4]}}</span>
                </span>
            </div>
            <div class="regim__dayOff">
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][5]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][5]}}</span>
                </span>
                <span>
                  <span  class="ru typewriter js-type">{{regim.articles.ru['13'][6]}}</span>
                  <span  class="en typewriter js-type">{{regim.articles.en['13'][6]}}</span>
                </span>
            </div>
            <div class="regim__submark">
              <span  class="ru typewriter js-type">{{regim.articles.ru['13'][7]}}</span>
              <span  class="en typewriter js-type">{{regim.articles.en['13'][7]}}</span>
            </div>
        </div>
        
        <img class="regime-figure" src="../assets/croped-dot-grey.svg" alt="">
      
    </div>

  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: 'Regim',
  props: {
    excursion: Object,
    gid: Object,
    regim: Object
  },
  data(){
    return{
      currentSlide: 0,
      slides: [],
      qrUrl: ''
    }
  },
  mounted() {
    this.slides = document.querySelectorAll('.info__wrapper');
    this.qrUrl = this.gid.articles.ru['12'][2]
    const canvas = document.getElementById('qrCode');
    this.generateQR(this.qrUrl, canvas);
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
    generateQR: async (text, canvas) => {
      try {
        await QRCode.toCanvas(canvas, text)
      } catch (err) {
        console.error(err)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.info{
    width: 50%;
    position: relative;
}
.info__figure{
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 25vw;
  overflow: hidden;
}
.info__figure img{
  transform: translateX(-60%);
}
.info__wrapper{
    padding-top: 2.7vw;
    padding-left: 3.2vw;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
    transition: all .85s ease-in-out;
    text-align: center;
}
.info .info__wrapper:first-child{
  transform: translateY(0%);
}
.info__name{
    margin-top: 5vw;
    font-size: 3.7vw;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0 17%;
    font-family: var(--heding-font);
}
.info__description{
    font-size: 2vw;
    margin-top: 1vw;
    letter-spacing: 1px;
    color: #01e58d;
    padding: 0 14%;
}
.info__excursion{
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
}
.info__excursion > span{
    font-size: 3.6vw;
}
.info__excursion > span:first-child{
    font-size: 2vw;
    margin-bottom: 2vw;
}
.info__qr{
    margin-top: 2vw;
}
.info__qr canvas{
    width: 22vw!important;
    height: 22vw!important;
    border: 1vw solid #01e58d;
}


/*  */
.regim{
    width: 50%;
    background: #239afc;
    padding-top: 2.7vw;
    padding-left: 3.3vw;
    padding-right: 3vw;
}
.regim__name{
    text-transform: uppercase;
    text-align: left;
    font-size: 3.4vw;
    line-height: 1.25;
    font-weight: bold;
    padding-right: 25%;
    color: white;
    margin-bottom: 4vw;
    font-family: var(--heding-font);
}
.regim__week{
    padding: 1.8vw 3vw;
    background: white;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vw;
}
.regim__weekEnd{
    padding: 1.8vw 3vw;
    background: white;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vw;
}
.regim__dayOff{
    padding: 2vw 3vw;
    background: #01e58d;
    font-size: 2vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2vw;
}
.regim__dayOff > span:first-child{
    max-width: 47%;
}
.regim__submark{
    padding: 1.8vw 3vw;
    background: white;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 82%;
    margin-left: auto;
}
.regime-figure{
    position: absolute;
  bottom: 0;
  left: 20vw;
  pointer-events: none;
  width: 30vw;
}
</style>
