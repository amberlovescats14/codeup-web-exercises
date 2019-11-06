
    let sanAntonio = [29.424349, -98.491142]
    
    const getDarkSky = (cordinates) => {
        $('#afterLoading').css('display', 'none')
        $('#beforeLoading').css('display', 'block')
        let baseURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`
        let key = DARK_SKY
        let request = $.ajax(baseURL + `${key}/${cordinates[0]},${cordinates[1]}`)
        request.done(function (data) {
            $('#beforeLoading').css('display', 'none')
            $('#afterLoading').css('display', 'block')
            $('#loading').html('')
            showContent(data)
        }).fail(function (e) {
            console.log(`Dark-Sky request error`)
        })
    }
    const showContent = (info) => {
        let data = info.daily.data.filter((d,i)=> i < 3)
        data.forEach((item, i) => {
            console.log(item)
          let day = correctDate(item.time)
          let dayPrefix = prefixDay(i, item.time)
          let color = dayPrefix === 'Today'? '#fbddd5' : 'white'
            let display =
                `
      <div class="card indigo darken-4 white-text all-cards" id="card-${i}">
        <h5 class="center" style="color:${color}"><i>${day}</i></h5>
        <img src=${chooseIcon(item.icon)} alt="icon"
        class="center" id="icons">
            <div class="card-content center">
                ${item.summary}
            </div>
                <div class="card-action">
                    High: ${Math.round(item.temperatureHigh)} <br>
                    Low: ${Math.round(item.temperatureLow)}
                </div>
  </div>`
            let wrapper = $(`#${i}`)
            wrapper.html(display)
        
        })
    }
    
    const correctDate = (num) => {
        let time = new Date(num * 1000).toString()
        let split = time.split(' ')
        return`${split[1]} ${split[2]}`
    }
    const prefixDay = (num, num2) => {
        let time = new Date(num2 * 1000).toString()
        let split = time.split(' ')
        switch (num) {
            case 0: return `Today`;
            case 1: 
            case 2:    
                return split[0];
            default: return ''    
        }
    }
    
    const chooseIcon = (type) => {
        switch (type) {
            case 'rain': return `./amcharts_weather_icons_1.0.0/animated/rainy-1.svg`;
            case 'fog':
            case "partly-cloudy-day":
                return `./amcharts_weather_icons_1.0.0/animated/cloudy.svg`;
            case 'clear-day': return `./amcharts_weather_icons_1.0.0/animated/day.svg`
            default: return ''
        }
    }
    getDarkSky(sanAntonio)
    
    
