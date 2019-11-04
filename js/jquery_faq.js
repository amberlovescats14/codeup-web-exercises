$(document).ready(function () {
    let partThree = $('#part-three')
    partThree.css('text-align', 'center')
    let span =  partThree.children().children().first()
    span.css({
        background: '#efefef',
        borderRadius: '12px',
        padding: '5px'
    })
    
    //z: on click on span, hide div
    span.click(function () {
        partThree.toggle()
    })
    
    //Z: start with display none
    let ul = $('ul')
    ul.css('display', 'none')
    
    //z: for each h3, on click, toggle that h3's ul
    let h3 = ul.prev()
    h3.each(function () {
        $(this).click(function () {
            $(this).next().toggle()
        })
    })
    
    //z: the add pops up
    let ad = $('#add')
    ad.css({
        display: 'none',
        position: 'absolute',
        bottom: '65%',
        left: '20%',
        width: '60%',
        height: '30vh',
        background: 'lightblue',
        border: '15px solid blue',
        zIndex: '12',
        borderRadius: '12px'
        
    })
    ad.fadeToggle(1000).css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }).append(`<button class="waves-effect waves-light btn green white-text">$</button><button id="confirm" style="position: absolute;bottom: 0; left: 0">X</button>`)
    
    let confirm = $('#confirm')
    confirm.click(function () {
        ad.fadeToggle()
    })
    
    
})