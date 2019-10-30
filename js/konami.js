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
            if(answer === true) win()
            else alert(`TRY AGAIN`)
            
        }

        return null
    }
    const win = () => {
        let imageUrl = "https://media.giphy.com/media/l4KhWPNyLHiB3TjVe/giphy.gif"
        let body = $('body')
        body.html('')
        body.css("background-image", "url(" + imageUrl + ")");
        body.css({
            backgroundSize: 'cover'
        })
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


