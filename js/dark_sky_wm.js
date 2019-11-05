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
    <div class="col s12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${dayPrefix} ${day}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
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