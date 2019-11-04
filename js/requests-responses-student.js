$(document).ready(function () {
    "use strict"
    console.log("Intro to AJAX!")
    
    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */
    
    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    // console.log($.ajax(url))
    
    // $.ajax(`https://hookb.in/YVB1Y77JL6tgrkMNRqOg?username=bob`)
    
    
    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */
    let url = "https://hookb.in/YVB1Y77JL6tgrkMNRqOg"
    let person = {
        type: "POST",
        data: {
            first: "Jesse",
            last: "Pinkman",
            location: "unknown"
        }
    }
    
    // console.log($.ajax(url, person));
    
    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */
    let bobGet = {
        type: `GET`,
        data: {
            username: "amber"
        }
    }
    // console.log($.ajax(url, bobGet))
    
    
    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */
        
        
        
        // $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
        //     console.log(data);
        // });
        
        //z: STAR WARS
        //z:   .done(data, status)    .fail(e)
    let starwarsURL = `https://swapi.co/api`
    // let res = $.ajax(starwarsURL)
    // res.done(function (data) {
    //     console.log(data)
    // }).fail(function (e) {
    //     console.log(`FAIL`)
    //     console.error(e.message)
    // })
    /*
    
     */
//*----------------------
    
    //    let books = $.ajax('./data/books.json')
    // books.always(function () {
    //     console.log(`Looking for books...`)
    // })
    // books.done(function (data) {
    //     console.log(data)
    // })
    // books.fail(function (e) {
    //     console.error(e.message)
    // })

//*-----------------------
// let getStarWars = $.ajax(starwarsURL)
//     getStarWars.always(function () {
//         console.log(`Getting Star Wars...`)
//     }).done(function (data) {
//         console.log(data)
//     }).fail(function (e) {
//         console.log(`Something wrong with your request...`)
//         console.error(e.message)
//     })
//*-----------------------
    //z: /films&search=A New Hope
    // let myMovie = $.ajax(starwarsURL + '/films', {
    //     type: `GET`,
    //     data: {
    //         'search': 'A New Hope'
    //     }
    // })
    // myMovie.always(function () {
    //     console.log(`Loading...`)
    // })
    // myMovie.done(function (data) {
    //     console.log(data.results[0].director)
    // })
    /*
    
     */
//*---------------------
//     let movie2Params = {
//         type: `GET`,
//         data: {
//             'search': 'The Force Awakens'
//         }
//     }
//     let movie2 = $.ajax(starwarsURL + '/films', movie2Params)
//     movie2.always(function () {
//         console.log(`Loading...`)
//     })
//     movie2.done(function (data) {
//         console.log(data.results[0].release_date)
//     })
//     movie2.fail(function (error) {
//         console.error(error.statusText)
//     })
    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */
    let bookURL = './data/books.json'
    // let book2 = $.ajax('./data/books.json')
    // book2.always()
    // book2.done(function (data) {
    //     let filter = data.filter(d=> d.title === 'The Canterbury Tales')
    //     console.log(filter[0].author)
    // })
    // book2.fail(function (e) {
    //     console.log(`Fail`)
    // })
    
    
    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */
    
    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */
    //z: data:{}    is implied
    
    // let dotGetParams = {
    //     'search': 'The Force Awakens'
    // }
    // let dotGet = $.ajax(starwarsURL + '/films', dotGetParams)
    // dotGet.done(function (data) {
    //     console.log(data)
    // })
    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */
    
    //z*********************************************
     //z              AJAX and HTML
    //z ******************************************** */
    
    $('#main').append(`<button id="refresh">Refresh</button>`)
    $('#main').append(`<h1 id="title"></h1>`)
    
    let getFunc = () => {
        let requestBooks = $.ajax(bookURL)
        requestBooks.done(function (data, num) {
            let random = Math.floor(Math.random() * 100)
            let title = data[random].title
            $('#title').html(title)
        })
        requestBooks.fail(function (e) {
            console.log(`Request Error`)
        })
    }
    getFunc()
    let refresh = $('#refresh')
    refresh.click(getFunc)
    /*
     * TO DO: Add your favorite book to the end of books.json.
     */
    
    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */
    
})