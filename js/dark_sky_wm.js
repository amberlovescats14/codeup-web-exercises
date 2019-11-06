$(document).ready(function () {
    let cordinates = [29.424349, -98.491142]
    
    const getDarkSky = () => {
        let baseURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`
        let key = DARK_SKY
        let request = $.ajax(baseURL + `${key}/${cordinates[0]},${cordinates[1]}`)
        request.done(function (data) {
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
            let display =
                `  <div class="row">
    <div class="col s12" id=${i} >
      <div class="card indigo darken-4">
        <div class="card-content white-text">
          <h6>${dayPrefix} <i>${day}</i></h6>
<!--          row-->
          <div class="row">
          <div class="col s12">
          High: ${Math.round(item.temperatureHigh)}
        </div>
         <div class="col s12">
          Low: ${Math.round(item.temperatureHigh)}
        </div>
        </div>
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
            let wrapper = $('#sky-card-wrapper')
            wrapper.append(display)
        
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
    getDarkSky()
    
    
})