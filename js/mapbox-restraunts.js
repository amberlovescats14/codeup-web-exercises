const restruants = [
    {
        name: "La Villita Cafe",
        address: "418 Villita St, San Antonio, TX 78205",
        cords: []
    },
    {
        name: "Rosella",
        address: "114 E Houstan St, San Antonio, TX 78205",
        cords: []
    
    },
    {
        name: "Josephine Street",
        address: "400 E Josephine St, San Antonio, TX 78215",
        cords: []
    
    }
]

let restrauntOptions = {
    color: "#00d8ff",
    anchor: 'bottom'
}
restruants.forEach(r => {
    //! GET_CORDINATES
    geocode(r.address, MAPBOX_KEY)
        .then(res => {
            console.log(res)
            //! set cords in object
            r.cords = res
            //!MAKE_MARKER
            new mapboxgl.Marker(restrauntOptions)
                .setLngLat(res)
                .addTo(map)

        })
})


map.on('load', ()=> {
    map.addSource('source', {
        type: 'geojson',
        data: {
            type: 'Feature',
            properties: {},
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-98.49590530423727, 29.42642413215455],
                    [ -98.49329631333507,  29.42639550337921],
                    [-98.49556222098252,  29.424274132111805],
                    [-98.49331879540317, 29.424434298920232],
                    [-98.49581072254888,  29.424484007773827],
                    [-98.49590530423727, 29.42642413215455]
                    
                ]]
            }
        }
    })
    // Load an image to use as the pattern
    map.loadImage('https://thumbs.dreamstime.com/t/illustration-zoo-animals-beautiful-nature-zoo-animals-beautiful-nature-107607112.jpg', function(err, image) {
// Throw an error if something went wrong
        if (err) console.log(`pix `);

// Declare the image
        map.addImage('pattern', image);

// Use it
        map.addLayer({
            "id": "pattern-layer",
            "type": "fill",
            "source": "source",
            "paint": {
                "fill-pattern": "pattern"
            }
        })
    })
})





//  {lng: -98.49544366956381, lat: 29.42603713917265}
//  {lng: -98.49407073914558, lat: 29.425718256130793}
//  {lng: -98.49526061217637, lat: 29.424894470290695}
//  {lng: -98.4941419281271, lat: 29.425213355927326}


// [-98.49590530423727, 29.42642413215455]
//  [ -98.49394667109488,  29.426116848887816]
//   [lng: -98.49556222098252,  29.424274132111805]
//   [-98.49331879540317, 29.424434298920232]

// new mapboxgl.Popup(restrauntOptions)
//     .setLngLat(res)
//     .setHTML(`<h4>Lng: ${res[0]} Lat: ${res[1]}</h4>`)
//     .addTo(map)

// map.flyTo()