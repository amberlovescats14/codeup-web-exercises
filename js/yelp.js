$(document).ready(function () {
    let url = 'https://api.yelp.com/v3/businesses/search?term=hardware&longitude=-98.491142&latitude=29.424349'
    let proxy = "http://localhost:63342/codeup-web-exercise/ajax-store.html?_ijt=7jo6gii5b39v22q0jbtu78m3hm"
    // let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

    const getData = () => {
        // const config = {
        //         //     "Authorization": YELP_KEY,
        //         //     data: {
        //         //         "term": "tools",
        //         //         "longitude": '-98.491142',
        //         //         "latitude": '29.424349'
        //         //     }
        //         // }
        const config = {
            "Authorization": YELP_KEY,
            "Access-Control-Allow-Origin": proxy
        }
        let yelpRequest = $.ajax({
            url: url,
            type: "GET",
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', `Bearer ${YELP_KEY}`)
                xhr.setRequestHeader('Access-Control-Allow-Origin', "*")
    
            },
        });
        yelpRequest.done(function (data) {
            console.log(`hello`)
            console.log(data)
        }).fail(function (e) {
            console.log(`yelp fail`)
        })
    }
    
    
    
    
    getData()
    
})