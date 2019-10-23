//? Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map

//? // Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker

//? // Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup

//? // Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

let centerCords = [-98.4916, 29.4252]
mapboxgl.accessToken = MAPBOX_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    zoom: 13,
    center: centerCords,
    logoPosition: 'top-left',
    // maxOut: 10
});

//*id map
//* zoom level : 0-24 //14 is ideal
//* Lng, Lat




//*MARKER is an object
let markerOptions = {
    color: "#FFC0CB",
    draggable: true,
    anchor: 'bottom'
}

let codeupOptions = {
    color: "green",
    draggable: true,
    anchor: 'bottom'
}

let zooOptions = {
    color: 'orange',
    anchor: 'bottom'
}
// let codeupPopup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)
let codupCords = [-98.489570, 29.426780]
let codeup = new mapboxgl.Marker(codeupOptions)
    .setLngLat([-98.489570, 29.426780])
    .addTo(map)

// codeup.setPopup(codeupPopup)
let houseCords = [-98.363970, 29.594980]
let myhouse = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.363970, 29.594980])
    .addTo(map)

let zooCords = [-98.494614, 29.425171]
let zooMarker = new mapboxgl.Marker(zooOptions)
    .setLngLat(zooCords)
    .addTo(map)

//! Showing addresses where clicked
map.on('click', (mark)=> {
    let lat = mark.lngLat.lat
    let lng = mark.lngLat.lng
    console.log(mark.lngLat)
    

    reverseGeocode({lng, lat}, MAPBOX_KEY)
        .then(res => {
            new mapboxgl.Popup()
                .setLngLat([lng,lat])
                .setHTML(`<p>${res}</p>`)
                .addTo(map)
        })
    //! Marker CLICKS
    restruants.forEach(r => {
        //? need to make polygon
    })
})


/**********************************************
 * 					Geocoder
 *********************************************/

//!USE WITH INPUT
// geocode(`300 dolorosa, San Antonio, TX,78205 `, MAPBOX_KEY)
//     .then(res => {
//         map.setCenter(res)
//
//         new mapboxgl.Marker()
//             .setLngLt(res)
//             .addTo(map)
//     })
    


//!REVERSE GEO CODE
// reverse geocode method from mapbox-geocoder-utils.js
// reverseGeocode({lng: -98.4861, lat: 29.4260}, MAPBOX_KEY).then(function(results) {
//     // logs the address for The Alamo
//     console.log(results);
// });



//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


//  {lng: -98.49544366956381, lat: 29.42603713917265}
//  {lng: -98.49407073914558, lat: 29.425718256130793}
//  {lng: -98.49526061217637, lat: 29.424894470290695}
//  {lng: -98.4941419281271, lat: 29.425213355927326}