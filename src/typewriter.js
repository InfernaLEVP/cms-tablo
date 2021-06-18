/* eslint-disable */ 
export default function typeWriter(){
    window.app2 = (_ => {
  
      let log = console.log.bind(console),
          messageElement = document.querySelectorAll('.js-type');
      // text = messageElement.innerText.trim();
  
      messageElement.forEach(el => {
          let text = el.innerText.trim();
  
          let words = text.split(' ');
  
          let work = [];
  
          words.forEach(word => {
              let splitWord = word.split('').map((char, index) => {
                  return `<i>${char}</i>`;
              }).join('');
              work.push(splitWord);
          });
  
  
          let formattedWords = work.map((word, index) => {
              return `<span>${word}</span>`;
          }).join(' ');
  
          el.innerHTML = formattedWords;
          el.classList.add('animate');
      });
  
      return {
          replay: (event) => {
              let el = document.getElementById('quote__phrase');
              el.classList.remove('animate');
              el.offsetHeight; // force reflow
              setTimeout(_ => {
                  el.classList.add('animate');
              });
          },
          reload: (event) => {
              messageElement = document.querySelectorAll('.js-type');
              // text = messageElement.innerText.trim();
  
              messageElement.forEach(el => {
                  let text = el.innerText.trim();
  
                  let words = text.split(' ');
  
                  let work = [];
  
                  words.forEach(word => {
                      let splitWord = word.split('').map((char, index) => {
                          return `<i>${char}</i>`;
                      }).join('');
                      work.push(splitWord);
                  });
  
  
                  let formattedWords = work.map((word, index) => {
                      return `<span>${word}</span>`;
                  }).join(' ');
  
                  el.innerHTML = formattedWords;
                  el.classList.add('animate');
              });
          }
      };
  
    });
    window.app2();
  }