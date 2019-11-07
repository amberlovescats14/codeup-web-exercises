
    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/amberlovescats14/ck2nvmojv05z31cnz0pq3s9h4',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });
    
    
    //!Make Marker

    let sanAntonioOptions = {
        color: '#1A227E',
        anchor: 'bottom',
        draggable: true
    
    }
    let sanAntonioPop = new mapboxgl.Popup({
        offset: 25
    })
        .setHTML(`<p>Drag for new forecast!</p>`)
    let sanAntonioMarker = new mapboxgl.Marker(sanAntonioOptions)
        .setLngLat(sanAntonio.reverse())
        .setPopup(sanAntonioPop)
        .addTo(map)
    //!drag function
    const onDragEnd = () => {
        let lngLat = sanAntonioMarker.getLngLat()
        console.log(lngLat)
        getDarkSky([lngLat.lat, lngLat.lng])
    }
    sanAntonioMarker.on('dragend', onDragEnd)
    
    let button = $('#searchButton')
    let input = $('#city-search')
    button.click(function (e) {
        e.preventDefault()
        enterOrSubmit()
    })
    input.keydown(function (e) {
        if(e.key === "Enter"){
            e.preventDefault()
            enterOrSubmit()
        }
    })
    const enterOrSubmit = () => {
        let value = input[0].value
        getCords(value)
        input.val('')
        
    }
    
    const getCords = (value) => {
        geocode(value, MAPBOX_KEY)
            .then(res => {
                console.log(`helo`)
                console.log(res)
                //!CHANGE_ZOOM
                changeZoom(res)
                getDarkSky(res.reverse())
            })
    }
    const changeZoom = (centerCords) => {
        map.flyTo({
            center: centerCords,
            zoom: 10,
            speed: 0.2,
            curve: 1
        })
        
    }
    
