(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|")
    
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let breaks = planetsArray.join('\n')
    //:: This would be useful if we are creating a node application
    
    let ul = document.createElement('ul')
    for (let planet of planetsArray) {
        let li = document.createElement('li')
        ul.append(li)
        li.innerHTML = planet
    }
    document.getElementById('planets').append(ul)
    
    
    
    //::++++++++++++
    let planetUL = `<ul>`
    for (let planet of planetsArray) {
        planetUL += `<li> ${planet} </li>`
    }
    
})();


