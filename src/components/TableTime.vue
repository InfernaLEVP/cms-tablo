<template>
  <div class="wrapper">
    <img class="circles-figure" src="../assets/circles.svg" alt="">
    <div class="section">
      
      <div class="day">
        <div class="day__title">
          <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][0]}}</span>
          <span  class="en typewriter js-type">{{rasp.articles.en['8'][0]}}</span>
        </div>
        <div class="day__name">
          <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][1]}}</span>
          <span  class="en typewriter js-type">{{rasp.articles.en['8'][1]}}</span>
        </div>
        <div class="day__events">
          
          <div class="day__event">
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][2]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][2]}}</span>
            </span>
            <span></span>
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][3]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][3]}}</span>
            </span>
          </div>

          <div class="day__event">
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][4]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][4]}}</span>
            </span>
            <span></span>
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][5]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][5]}}</span>
            </span>
          </div>

          <div class="day__event">
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][6]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][6]}}</span>
            </span>
            <span></span>
            <span>
              <span  class="ru typewriter js-type">{{rasp.articles.ru['8'][7]}}</span>
              <span  class="en typewriter js-type">{{rasp.articles.en['8'][7]}}</span>
            </span>
          </div>

        </div>
      </div>

      <div class="price">
        <div class="price__title">
          <span  class="ru typewriter js-type">{{price.articles.ru['9'][0]}}</span>
          <span  class="en typewriter js-type">{{price.articles.en['9'][0]}}</span>
        </div>

        <div class="price__adult">
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][1]}}</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][1]}}</span>
          </span>
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][5]}} ₽</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][5]}} ₽</span>
          </span>
        </div>

        <div class="price__child">
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][2]}}</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][2]}}</span>
          </span>
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][6]}} ₽</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][6]}} ₽</span>
          </span>
        </div>

        <div class="price__discount">
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][3]}}</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][3]}}</span>
          </span>
          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][7]}} ₽</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][7]}} ₽</span>
          </span>

          <span>
            <span  class="ru typewriter js-type">{{price.articles.ru['9'][4]}}</span>
            <span  class="en typewriter js-type">{{price.articles.en['9'][4]}}</span>
          </span>
        </div>


      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'TableTime',
  props: {
    rasp: Object,
    price: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circles-figure {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-75%) translateX(50%);
  z-index: 555;
}
.day{
  width: 50%;
  padding-top: 2.7vw;
  position: relative;
}
.day__title{
  color: #C4C4C4;
  text-transform: uppercase;
  text-align: left;
  font-size: 3.3vw;
  font-weight: bold;
  padding-left: 33.5%;
  /* letter-spacing: 4px; */
  font-family: var(--heding-font);
}
.day__name{
  margin-top: 2vw;
  padding-left: 33.5%;
  margin-bottom: 6vw;
  font-size: 2.2vw;
  font-family: var(--heding-font);
}
.day__events{
  margin-top: 35px;
  width: 92%;
  margin: 0 auto;
  font-family: var(--text-font);
}
.day__event{
  display: flex;
  margin-bottom: 3.5vw;
}
.day__event > span:nth-child(1){
  font-size: 2.2vw;
  display: flex;
  align-items: flex-end;
  max-width: 35%;
}
.day__event > span:nth-child(2){
  flex: 1;
  border-bottom: 1vw dotted #01e58d;
  margin-left: 1.55vw;
  margin-right: 1.55vw;
  transform: translateY(-0.5vw);
}
.day__event > span:nth-child(3){
  font-size: 3.4vw;
  display: flex;
  align-items: flex-end;
  font-family: var(--heding-font);
  transform: translateY(4px);
}

/*  */
.price{
  width: 50%;
  background: #01e58d;
  padding-top: 2.7vw;
  padding-left: 3vw;
  position: relative;
}
.price__title{
  color: white;
  text-transform: uppercase;
  text-align: left;
  font-size: 3.3vw;
  padding-right: 33.5%;
  font-weight: bold;
  margin-bottom: 5vw;
  font-family: var(--heding-font);
}
.price__adult{
  padding: 2vw 2.7vw;
  font-size: 2.6vw;
  display: flex;
  align-items: center;
  justify-content:space-between;
  background: white;
  max-width: 96%;
  font-family: var(--text-font);
}
.price__adult > span:first-child{

}
.price__adult > span:last-child{
  font-size: 3.7vw;
  font-family: var(--heding-font);
  font-family: TTNorms;
}
.price__child{
  padding: 2vw 2.7vw;
  font-size: 2.6vw;
  display: flex;
  align-items: center;
  justify-content:space-between;
  max-width: 96%;
  font-family: var(--text-font);
}
.price__child > span:last-child{
  font-size: 3.7vw;
  font-family: var(--heding-font);
  font-family: TTNorms;
}
.price__discount{
  padding: 2vw 2.7vw;
  font-size: 2.6vw;
  display: flex;
  align-items: center;
  justify-content:space-between;
  max-width: 96%;
  background: white;
  flex-wrap: wrap;
  font-family: var(--text-font);
}
.price__discount > span:nth-child(2){
  font-size: 3.7vw;
  font-family: var(--heding-font);
  font-family: TTNorms;
}
.price__discount > span:last-child{
  width: 100%;
  font-size: 1.8vw;
  padding-right: 10%;
  margin-top: 0.7vw;
}

</style>
