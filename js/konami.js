$(document).ready(function () {
    const loadingComplete = () => {
        $('#loading').css('display', 'none')
        $('body').css('background', 'black')
        $('#main-wrapper').css('display', 'flex')
    }
    setTimeout(loadingComplete, 2000)
    
    let userInput = []
    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    let strikes = 3
    $(document).keydown(function (e) {
        e.preventDefault()
        let letter = e.key
        let code = e.keyCode
        // changeDisplay(letter)
        mainKey(letter, code)
    })
    
    const mainKey = (char, c) => {
        let uc = char.toUpperCase()
        let main = $('#main-key')
        switch(c){
            case 37:
            case 38:
            case 39:
            case 40:
                main.html(`<h6 class="neon">${uc}</h6>`)
                break;
            default:
                main.html(`<h1 class="neon">${uc}</h1>`)
        }

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
            if(answer === true)  win()
            else if(strikes === 1 ) loose()
            else {
                strikes--
                userInput = []
                alert(`TRY AGAIN`)
                $('#span').html(strikes)
            }
            
        }

        return null
    }
    const win = () => {
        console.log(`WIN`)
        let imageUrl = "https://media.giphy.com/media/l378aIbkmStxhUa1G/giphy.gif"
        let body = $('body')
        body.html('')
        body.css("background-image", "url(" + imageUrl + ")");
        body.css({
            backgroundSize: 'cover'
        })
        alert(`You have added 30 lives!`)
        setTimeout(function () {
            location.reload()
        },3000)
    }
    const loose = () => {
        console.log(`LOST`)
        let imageUrl = "https://media.giphy.com/media/fiyQQLci4d1w6Njojo/giphy.gif"
        let body = $('body')
        body.html('')
        body.css("background-image", "url(" + imageUrl + ")");
        body.css({
            backgroundSize: 'cover'
        })
        alert(`Sorry, You Lost!`)
    }

    
    //!KONAMI TEXT
    const target = window.document.getElementsByTagName('h1')[0]
    
    const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
    const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
    const flickerAndColorText = text =>
        text
            .split('')
            .map(flickerLetter)
            .map(colorLetter)
            .join('');
    const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);
    
    
    neonGlory(target);
    target.onclick = ({ target }) =>  neonGlory(target);
    
    
    
    // end
})


