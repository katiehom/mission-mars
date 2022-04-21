//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  console.log(date)

  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=VDwWMjLpPDilvYokVYbM8mWRJx4IybCAFOoA73yu`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.photos.length > 0 ){
          document.querySelector('img').src = data.photos[0].img_src
        }else if(data.photos.length === 0){
          alert('Please try a different date')
        }
       
        document.querySelector('h3').innerText = data.photos[0].rover.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

