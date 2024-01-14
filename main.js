//Example fetch using NASA APOD API
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=oMah2xrNvC7as8C1BH43Q0sxez5zBTXtf2Qc0aeR&date=${choice}`

    fetch(url)
        .then(res => res.json())  // parse response as JSON
        .then(data => {
            console.log(data)
            if( data.media_type === 'image' ){
                document.querySelector('img').src = data.hdurl
            }else if(data.media_type === 'video'){
                document.querySelector('iframe').src = data.url
        }
        .catch(err => { 
            console.log(`error ${err}`)
        });
}
