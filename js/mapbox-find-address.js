let button = document.getElementById('btn')
let input = document.getElementById('inp')
console.log(button)
const getAddress = (e) => {
    e.preventDefault()
    let value = input.value
    let cords = []
    
    //! GET_CORDINATES
    geocode(value, MAPBOX_KEY)
        .then(res => {
            console.log(res)
            //!MAKE_MARKER
    
            new mapboxgl.Popup()
                .setLngLat(res)
                .setHTML(`<h1>Lng: ${res[0]} Lat: ${res[1]}</h1>`)
                .addTo(map)
        })
}

button.addEventListener('click', (e)=>getAddress(e))


// MARKER DOESNT HAVE A ZOOM