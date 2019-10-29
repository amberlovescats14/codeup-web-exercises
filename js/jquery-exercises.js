// $(document).ready(()=> {
//     alert(`READY!`)
// })
//!DONT FORGET TO SET ALERT


let allLi = $('li')
//z: SET ATTRIBUTE
allLi.attr('class', 'codeup').css('color', 'red')

//z: SET ID
let count = 1

allLi.each(function () {
    $(this).attr('id', count++)
})

//z: multiple attributes at once
let h1 = $('h1')
h1.attr({
    class: 'heading',
    id: 'main'
})

//z: added a img dynamically
let url = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg'

let wrapper = $('#wrapper')
wrapper.append(`<img src=${url} id="wrapper-img">`)
$('#wrapper-img').css({
    height: '50px',
    width: '50px',
    borderRadius: '50%'
})

//z: CHAINED the style and animation
let header = $('header')
header.css({
    background: 'red',
    color: 'white'
}).animate({
    opacity: '.9',
    left: '200px',
    height: '200px'
}).append(`<button id="finish" style="margin-left: 20px">Submit</button>`)


//z: alert user using the html of page
const greetUser = () => {
    let userName = $('#user').html()
    let split =  userName.split(' ')
    alert(`Hello ${split[split.length -1]}`)
}
// greetUser()

//z: ON CLICK ALERT
$('#finish').click(function () {
    let text = h1.html()
    alert(`${text} finished!`)
})


wrapper.append(`<p id="1" class="duplicate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores culpa excepturi, explicabo id in nulla quaerat quidem, rem sit tempora tenetur unde voluptatem? Dolorem excepturi minima quibusdam repellendus tempore!</p>`)
//z: it will ignore the duplicate id
$('#1').css({
    border: '2px solid yellow'
})
//z: remove attribute
let duplicate = $(".duplicate")
duplicate.removeAttr('id')

//w: CLASS SELECTORS
let codeups = $('.codeup')
codeups.css({
    border: '1px solid red'
})


//w: remove the class on one li
//! passing i
codeups.each(function (i) {
    if(i === 0) $(this).removeClass('codeup')
    if(i === 1) $(this).attr('id', 'codeup')
})

//y: ELEMENT SELECTORS
allLi.css({
    fontSize: '20px'
})

$('h1, p, li').hover(
    function () { $(this).css('background', 'yellow')},
    function () { $(this).css({
        background: 'white',
        color: 'black'
    })}

)





