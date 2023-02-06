import './style.css'
// import { setupCounter } from './counter.js'
// setupCounter(document.querySelector('#counter'))


async function postData(url) {
  const response = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      'Content-Type': "application/json"
    },
    referrerPolicy: "no-referrer"
  }).catch(error => {
    console.log(error);
  })

  console.log(response);
  return response.json();
}

test.onclick = function() {
  // fetch("https://www.youtube.com", 
  //   {
  //       method: "POST", 
  //       body: JSON.stringify(data),
  //       mode: 'cors',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       }
  //   }
  // ).then(response => response.json())
  // .then(data => {
  //     console.log(data);
  // });


  // const test = open("https://polygonscan.com/token/0x952bb3f00dacb912741ac3c89197e0c7696f9754");
  // test.setTimeout(_ => console.log(document.getElementsByClassName("table table-md-text-normal table-hover mb-4")), 500);

  // fetch('https://polygonscan.com/token/0x952bb3f00dacb912741ac3c89197e0c7696f9754')
  //   .then(res => res.text())
  //   .then(text => console.log(text));

  postData('https://polygonscan.com/token/0x952bb3f00dacb912741ac3c89197e0c7696f9754')
  .then(text => console.log(text));
};