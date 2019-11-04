$(document).ready(function () {
    
    let tableBody = $('#insertProducts')
    $('#wrapper').append(`<button id="refresh">Refresh</button>`)
    const makeRequest = () => {
        let inventoryURL = './data/inventory.json'
        let request = $.get(inventoryURL)
        request.done(function (data) {
            let text = ''
        data.forEach(thing => {
            text += `<tr>`
    
            text +=
                `<td>${thing.title}</td> <td>${thing.quantity}</td>
                <td>${thing.price}</td>
                <td>${thing.categories[0]}</td>`
                text += `</tr>`
        })
            tableBody.html(text)
        })
            request.fail(function (e) {
                console.log(`REQUEST FAILED`)
            })
    }
    
    makeRequest()
    
    let refresh = $('#refresh')
    refresh.click(function () {
        makeRequest()
    })
    
})
