<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="res"></div>

  <Rules :msg="object.forms.tablo_pravila_poseschenie"
  :sobytie="object.forms.tablo_sobytie"
  v-if="object.forms"/>

  <TableTime 
  :rasp="object.forms.tablo_raspisanie_dnya"
  :price="object.forms.tablo_stoimost_biletov"
  v-if="object.forms"/>

  <Attention 
  :attention="object.forms.tablo_vazhnoe_sobytie"
  :map="object.forms.tablo_karta" 
  v-if="object.forms"/>

  <Regim 
  :excursion="object.forms.tablo_ekskursiya"
  :gid="object.forms.tablo_mobilnyj_gid"
  :regim="object.forms.tablo_rezhim_raboty"
  v-if="object.forms"/>
</template>

<script>
import Rules from './components/Rules.vue'
import TableTime from './components/TableTime.vue'
import Attention from './components/Attention.vue'
import Regim from './components/Regim.vue'
import typeWriter from './typewriter.js'

export default {
  name: 'App',
  components: {
    Rules,
    TableTime,
    Attention,
    Regim
  },
  data(){
    return{
      token: "eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSldXejA4VFFSVEhwd1dDQ1FrQ0VTSWFqRkgwWkJhalIwNmwzWmFhb2R2c0Q0Mll1Rm0yUTEzWTdxeXpzMUF1aHBNZU9HQlVFaFBcL0JmNFR2ZmdIR0QxNDVlek5PRk9tM1I5TVM5eFQ4ejdmdnZlK2IxNTI5dlFNVEVRRVBHNFR4XC9NakpmVGp0aGNvVVVpOG9CMGhOeVllUFZEaUNKRVdvajFGclNlMFdBU2NQNFVpS0VCUTlGb1V6TUVkWjg5WjhaMmd2YUp0N1NDWHJuWUplSVJKVzJUY0prNEg3V095cXd4eXU1aWdUSUVrZGVGdkVVeHVnbG5IZFhFYzBBWU8xRzdvRWRUYUJETkpER0ozbDRmbVhVWlFRRDNIajlMU1NSUTRXejVxUVREbHhQUVZabFU5RkZGdzlielptSHIraW9Ib0tnUlhRaWVLV0hjNUp3YmxyWFBPMnd5WWc5ZmdEUmp2aGdYMnNObmQ0MUtGNTFISzJQZVphdzhIMGJJVmRIREwyXC9aNGNaYlwvY09uRDkrTXZoMVlSQURhVEI1ZlwvSjRrdnJvSERyeVwvXC8zT29OdXVCU3NKQnFQWkd0ZGtQV3pXeVMyU1NJVlwvN3h1Zm54NU96ZGl6RldtU3VxXC8zOGV5eVV4dVlNeTdvUU9jU2hPblJGTHV6XC9PZmo5a3lkY3VUOTRcL2hRUEY4RHFoajloR0JSUzFCaVdTeE16dU9NRitmOTRVWE5QcnRYWFRMdXRxeVZUdGttN1d5MUNOT0o2bVlENERLMXJaMmxBYlpwXC9PWm1oVjB6ZjZKSnUwVm9KUTFaXC8zNFdJRzFodUd5WGpKckdzTmVWbW9sVE0wVzFiWGtuYXp4REpVUGRkUVJZWHFVSmNDRG5FcHFNU2xJSEtYQW81d0tSUkRYQW9xY1NsSTJ1WE5jMUpUVGJ0cVFTaXRLcG8yMUpKZVhoOHlDUUdIVEVKUXlTUUVrVTlDd0JHVEVJb2hreEJVTWdsQjBwTVlrQXVIUFplUXZMXC9wQktYTnBYTGxuQzBrUkdZclZTcnZLVlVxYlNnVlRydTUzdytidHE0YVRhMWgxTmRncjBscFhiRUdwbGFyd1lGXC9tK2xNeTVCcmhLK2M1blpHazY2VUUxN1BDTG1oa1FKdUxTY1FDMlExSzVLMzBCMFp0S3QxRlZic3A2cHVYTndWSVpXc3FDRHlGUlZ3eElvS3haQVZGVlN5b29La0RcL1hHQldJM1M0YnhUTk1yXC9MMDgyVUo3eU1mOGRwbnUzVFwvODRsUWdadGZtMGVcLzMzNDd2XC9tUXY4eWRnWXNcL3hZOFN1djVsRTFJZzdXNGk4UFQxWm12cjA2NmgzbVlnUGk3RlwvejdtRHJKd0lBQUE9Iiwic3ViIjoiZGV2ZWxvcCIsInJvbGVzIjpbIlJJR0hUX0NSRUFURV9BUlRJQ0xFIiwiUklHSFRfQ1JFQVRFX0RPQ1VNRU5UIiwiUklHSFRfQ1JFQVRFX0ZPUk0iLCJSSUdIVF9DUkVBVEVfR0FMTEVSWSIsIlJJR0hUX0NSRUFURV9JTlNUQUxMQVRJT04iLCJSSUdIVF9DUkVBVEVfTE9DQVRJT04iLCJSSUdIVF9DUkVBVEVfUk9MRSIsIlJJR0hUX0NSRUFURV9VU0VSIiwiUklHSFRfREVMRVRFX0FSVElDTEUiLCJSSUdIVF9ERUxFVEVfRE9DVU1FTlQiLCJSSUdIVF9ERUxFVEVfRk9STSIsIlJJR0hUX0RFTEVURV9HQUxMRVJZIiwiUklHSFRfREVMRVRFX0lOU1RBTExBVElPTiIsIlJJR0hUX0RFTEVURV9MT0NBVElPTiIsIlJJR0hUX0RFTEVURV9ST0xFIiwiUklHSFRfREVMRVRFX1VTRVIiLCJSSUdIVF9HRVRfRlVMTF9JTlNUQUxMQVRJT04iLCJSSUdIVF9TRUFSQ0hfQVJUSUNMRSIsIlJJR0hUX1NFQVJDSF9ET0NVTUVOVCIsIlJJR0hUX1NFQVJDSF9GT1JNIiwiUklHSFRfU0VBUkNIX0dBTExFUlkiLCJSSUdIVF9TRUFSQ0hfSU5TVEFMTEFUSU9OIiwiUklHSFRfU0VBUkNIX0xPQ0FUSU9OIiwiUklHSFRfU0VBUkNIX1JPTEUiLCJSSUdIVF9TRUFSQ0hfVVNFUiIsIlJJR0hUX1NFRV9BUlRJQ0xFIiwiUklHSFRfU0VFX0RPQ1VNRU5UIiwiUklHSFRfU0VFX0ZPUk0iLCJSSUdIVF9TRUVfR0FMTEVSWSIsIlJJR0hUX1NFRV9JTlNUQUxMQVRJT04iLCJSSUdIVF9TRUVfTE9DQVRJT04iLCJSSUdIVF9TRUVfUk9MRSIsIlJJR0hUX1NFRV9VU0VSIiwiUklHSFRfU0VUX1JFU1BPTlNJQkxFX0ZPUl9JTlNUQUxMQVRJT04iLCJSSUdIVF9UT0dHTEVfQVJUSUNMRV9TVEFUVVMiLCJSSUdIVF9UT0dHTEVfR0FMTEVSWV9TVEFUVVMiLCJSSUdIVF9UT0dHTEVfSU5TVEFMTEFUSU9OX1NUQVRVUyIsIlJJR0hUX1RPR0dMRV9ST0xFX1NUQVRVUyIsIlJJR0hUX1RPR0dMRV9VU0VSX1NUQVRVUyIsIlJJR0hUX1VQREFURV9BUlRJQ0xFIiwiUklHSFRfVVBEQVRFX0FSVElDTEVfRklFTERfVkVSU0lPTiIsIlJJR0hUX1VQREFURV9GT1JNIiwiUklHSFRfVVBEQVRFX0dBTExFUlkiLCJSSUdIVF9VUERBVEVfSU5TVEFMTEFUSU9OIiwiUklHSFRfVVBEQVRFX0xPQ0FUSU9OIiwiUklHSFRfVVBEQVRFX1JPTEUiLCJSSUdIVF9VUERBVEVfVVNFUiIsIlJJR0hUX1VQREFURV9VU0VSX1BBU1NXT1JEIl0sImlzcyI6IlNwcmluZyBTZWN1cml0eSBSRVNUIEdyYWlscyBQbHVnaW4iLCJleHAiOjE2NTk5MzI2ODcsImlhdCI6MTYyMzkzMjY4N30.m1x_pTp6u04a4gvGar_OMunynTFK_EH1g90IfURDm7s",
      object: {},
      show: true,
      currentLang: 'ru'
    }
  },
  mounted() {
    this.currentLang = 'ru';
    // document.querySelector('.res').innerText = window.innerWidth + ' x ' + window.innerHeight;

    // this.postData('http://shelk-x.cln.net:8080/api/api/login', 
    // {
    //   username: "develop",
    //   password: "8oMxgJ"
    // })
    // .then(data => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });

    fetch('http://shelk-x.cln.net:8080/api/installations/fullinfo?num=4.1.2.0', { //http://shelk-x.cln.net:8080/api/installations/fullinfo?num=4.1.2.0
    // http://185.231.155.4:24567/getData
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.object = data;
        typeWriter();
        setTimeout(() => {
          this.language();  
        }, 8000);
      });


  },
  methods: {
    postData: async (url = '', data = {}) => {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${this.token}`
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    },
    language() {
      const ru = document.querySelectorAll('.ru');
      const en = document.querySelectorAll('.en');
      
      if(this.currentLang === 'ru'){
        this.currentLang = 'en';
        ru.forEach(el => {
          el.style.display = 'none';
        });
        en.forEach(el => {
          el.style.display = 'inline-block';
        });
      }else{
        this.currentLang = 'ru';
        en.forEach(el => {
          el.style.display = 'none';
        });
        ru.forEach(el => {
          el.style.display = 'inline-block';
        });
      }

      window.app2();

      setTimeout(() => {
        this.language();
      }, 8000);

    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
@font-face {
    font-family: 'nekstbold';
    src: url('./fonts/nekst-bold-desktop-webfont.woff2') format('woff2'),
         url('./fonts/nekst-bold-desktop-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: TTNorms;
    src: url('./fonts/TTNorms-Bold.ttf');
}
:root{
  --heding-font: 'nekstbold';
  --text-font: 'Montserrat', sans-serif;
}
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  font-family: var(--text-font);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-weight: bold;

  display: flex;
  width: 400vw;
}
.wrapper {
  width: 100vw;
}
.section{
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
.wrapper{
  border-left: 1px solid black;
  border-right: 1px solid black;
}
#app .wrapper:first-child{
  border-left: 0px;
}
#app .wrapper:last-child{
  border-right: 0px;
}
.section > div{
  padding: 20px;
}
.swiper-slide{
  max-height: 100vh;
}
.res{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: none;
}
.en{
  display: none;
}

/* TypeWrite */
.typewriter > span {
    display: inline-block;
}

.typewriter.animate > span > i {
    animation: typewriter 300ms forwards, background 1000ms forwards;
}

.typewriter > span > i {
    opacity: 0;
    font-style: initial;
}

.typewriter > span > i:nth-of-type(1) {
    animation-delay: 100ms;
}

.typewriter > span > i:nth-of-type(2) {
    animation-delay: 200ms;
}

.typewriter > span > i:nth-of-type(3) {
    animation-delay: 300ms;
}

.typewriter > span > i:nth-of-type(4) {
    animation-delay: 400ms;
}

.typewriter > span > i:nth-of-type(5) {
    animation-delay: 500ms;
}

.typewriter > span > i:nth-of-type(6) {
    animation-delay: 600ms;
}

.typewriter > span > i:nth-of-type(7) {
    animation-delay: 700ms;
}

.typewriter > span > i:nth-of-type(8) {
    animation-delay: 800ms;
}

.typewriter > span > i:nth-of-type(9) {
    animation-delay: 900ms;
}

.typewriter > span > i:nth-of-type(10) {
    animation-delay: 1000ms;
}

.typewriter > span > i:nth-of-type(11) {
    animation-delay: 1100ms;
}

.typewriter > span > i:nth-of-type(12) {
    animation-delay: 1200ms;
}

.typewriter > span > i:nth-of-type(13) {
    animation-delay: 1300ms;
}

.typewriter > span > i:nth-of-type(14) {
    animation-delay: 1400ms;
}

.typewriter > span > i:nth-of-type(15) {
    animation-delay: 1500ms;
}

.typewriter > span > i:nth-of-type(16) {
    animation-delay: 1600ms;
}

.typewriter > span > i:nth-of-type(17) {
    animation-delay: 1700ms;
}

.typewriter > span > i:nth-of-type(18) {
    animation-delay: 1800ms;
}

.typewriter > span > i:nth-of-type(19) {
    animation-delay: 1900ms;
}

.typewriter > span > i:nth-of-type(20) {
    animation-delay: 2000ms;
}

.typewriter > span > i:nth-of-type(21) {
    animation-delay: 2100ms;
}

.typewriter > span > i:nth-of-type(22) {
    animation-delay: 2200ms;
}

.typewriter > span > i:nth-of-type(23) {
    animation-delay: 2300ms;
}

.typewriter > span > i:nth-of-type(24) {
    animation-delay: 2400ms;
}

.typewriter > span > i:nth-of-type(25) {
    animation-delay: 2500ms;
}

.typewriter > span > i:nth-of-type(26) {
    animation-delay: 2600ms;
}

.typewriter > span > i:nth-of-type(27) {
    animation-delay: 2700ms;
}

.typewriter > span > i:nth-of-type(28) {
    animation-delay: 2800ms;
}

.typewriter > span > i:nth-of-type(29) {
    animation-delay: 2900ms;
}

.typewriter > span > i:nth-of-type(30) {
    animation-delay: 3000ms;
}

@keyframes typewriter {
    50% {
        transform: scale(1.4);
    }
    100% {
        opacity: 1;
    }
}

@keyframes background {
    0% {
        background: rgba(255, 255, 255, 0.1);
    }
    100% {
    }
}

</style>
