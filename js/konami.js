$(document).ready(function () {
    // const loadingComplete = () => {
    //     $('#loading').css('display', 'none')
    //     $('#main-wrapper').css('background', 'black')
    // }
    // setTimeout(loadingComplete, 2000)
    
    let userInput = []
    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    $(document).keydown(function (e) {
        e.preventDefault()
        let letter = e.key
        // changeDisplay(letter)
        mainKey(letter)
    })
    const mainKey = (char) => {
        let uc = char.toUpperCase()
        let main = $('#main-key')
        main.html(`<h1 class="neon">${uc}</h1>`)
        setTimeout(function () {
            main.html('')
        },500)
    }

    $(document).keyup(function (e) {
        userInput.push(e.keyCode)
        console.log(userInput)
        checkInput(userInput)
    })
    
    
    const checkInput = (arr) => {
            let answer = true
        if(userInput.length === 10){
            arr.forEach((a,i)=> {
                if(arr[i] !== konami[i]){
                    answer = false
                }
            })
            if(answer === true) alert(`KONAMI`)
            else alert(`TRY AGAIN`)
        }
        return null
    }

    
    
    
    
    // end
})


