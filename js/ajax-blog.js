$(document).ready(function () {
    
    //Z: AJAX CALL
    const getBlog = () => {
        let blogRequest = $.ajax('./data/blog.json')
        blogRequest.done(function (data) {
            showBlog(data)
        }).fail(function (e) {
            console.log(`request failed`)
        })
    }
    
    
    //Z: DISPLAY THE CARES
    const showBlog = (info) => {
        info.forEach((item, i) => {
            let show =
                `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src=${item.img} alt="blog img">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mx-2 mt-2">${i +1}. ${item.title}</div>
        <div class="font-bold text-md mb-2 ml-8">${item.date}</div>
    <p class="text-gray-700 text-base">
     ${item.content}
    </p>
  </div>
  <div class="px-6 py-4" id=${i}>

  </div>
</div>`
            $('#post').append(show)
            showCategories(item.categories, i)
        })
    }

    
    // Z: DYNAMICALLY DISPLAY THE PILLS
    const showCategories = (catg, index) => {
        catg.forEach(c => {
            let span =
                `    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">${c}</span>`
            $(`#${index}`).append(span)
        })
    }
    
    //Z: INITIAL CALL
    getBlog()
    
    //Z: BECAUSE OF THE WAY IT IS DYNAMICALLY SET UP, THE RERFRESH BUTTON HAS TO RELOAD THE PAGE
    let refreshButton = $('#refresh')
    refreshButton.click(function () {
        location.reload()
    })
    
    
})