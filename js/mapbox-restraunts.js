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


// new mapboxgl.Popup(restrauntOptions)
//     .setLngLat(res)
//     .setHTML(`<h4>Lng: ${res[0]} Lat: ${res[1]}</h4>`)
//     .addTo(map)

// map.flyTo()