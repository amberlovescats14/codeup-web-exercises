
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
      <div class="card indigo darken-4" id="card-${i}">
      <div class="card-action white-text">
                <h5 class="center" style="color: ${color}"><i>${day}</i></h5>

      </div>
        <div class="card-content white-text one" >
<!--          row-->
          <div class="row" style="height: 50%">
          <div class="col s12">
          ${item.summary}
           </div>
    
<!--        end row-->
        <div class="card-action white-text">
        
          <div class="row">
          <div class="col s12">
          High: ${Math.round(item.temperatureHigh)}
        </div>
         <div class="col s12">
          Low: ${Math.round(item.temperatureLow)}
        </div>

        </div>
<!--        end card action-->
        </div>
        </div>
      </div>
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
    getDarkSky(sanAntonio)
    
    
