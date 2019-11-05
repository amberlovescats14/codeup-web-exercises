$(document).ready(function () {
    
    let tableBody = $('#insertProducts')
    $('#wrapper').append(`<button id="refresh"  type="button" class="success button " style="margin: 10px 10px">Refresh</button>`)
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
    
    //Z : CARDS
    const getBlog = () => {
        let blogRequest = $.ajax('./data/blog.json')
        blogRequest.done(function (data) {
            showBlog(data)
        }).fail(function (e) {
            console.log(`blog request fail`)
        })
    }
    const showBlog = (info) => {
        let postDiv = $('#post')
        info.forEach((item,i) => {
            let display =
                `<div class="card " style="width: 300px; margin: 0 10px 0 10px">
  <div class="card-divider">
    <h4>${i +1}. ${item.title}</h4>
  </div>
  <img src=${item.img}>
  <div class="card-section">
    <p>${item.content}</p>
  </div>
</div>`
            postDiv.append(display)
        })
    }
    
    
    
    
    getBlog()
})
