// functions
const getJokes = e => {
  //console.log('get jokes');
  //grab the input
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true); //true for asynchronous

  //do something with the response - this refers to the xhr object
  xhr.onload = function() {
    if (this.status === 200) {
      //We parse the reponse because the api gives us a json object and we want a javascript object
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
};

// Grab the button
document.querySelector('.get-jokes').addEventListener('click', getJokes);
