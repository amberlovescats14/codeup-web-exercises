let button = document.getElementById('btn')
let input = document.getElementById('inp')
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
                .setHTML(`<h4>Lng: ${res[0]} Lat: ${res[1]}</h4>`)
                .addTo(map)
            
            // map.flyTo()
        })
}

button.addEventListener('click', (e)=>getAddress(e))


//! ZOOM OPTIONS
let select = document.getElementById('zoom')

const changeZoom = () => {
    let value = select.value
        map.flyTo({
            center: centerCords,
            zoom: value,
            speed: 0.2,
            curve: 1
        })
    
}
select.addEventListener('change', ()=> changeZoom())

//!
