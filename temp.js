$(document).ready(function () {
    //   http://www.dnd5eapi.co/api/ability-scores
    
    let proficency = $('#proficency-button')
    let strengthButton = $('#strength-button')
    let dexterityButton = $('#dexterity-button')
    let constitutionButton = $('#constitution-button')
    let intelligenceButton = $('#intelligence-button')
    let wisdomButton = $('#wisdom-button')
    let charismaButton = $('#charisma-button')
    
    let body = $('#proficency-modal-body')
    
    
    
    
    const getApi = async (name) => {
        let res;
        try {
            let div = document.getElementById(`${name}-modal-body`)
            if (name === 'proficiencies') {
                res = await fetch(`http://www.dnd5eapi.co/api/proficiencies`)
                    .then(res => res.json())
                let results = res.results.filter((a,i)=> i < 10)
                let html = `<ul>`
                results.forEach(r => html += `<li>${r.name}</li>`)
                html += `</ul>`
                body.html(html)
                
            }
            else {
                let generalBody = document.getElementById(`${name}-modal-body`)
                console.log(generalBody)
                let url = "http://www.dnd5eapi.co/api/ability-scores/"
                let num ;
                switch(name){
                    case `strength`: num = 1; break;
                    case `dexterity`: num = 2; break;
                    case `constitution`: num = 3; break;
                    case `intelligence`: num = 4; break;
                    case `wisdom`: num = 5; break;
                    case `charisma`: num = 6; break;
                    default: num = ''
                }
                res = await fetch(url+num)
                    .then(res=> res.json())
                let html = `<h1>${res.full_name}</h1>`
                html += `<p>${res.desc}</p>`
                generalBody.innerHTML = html
            }
            
        } catch (e) {
            console.error(e.message)
        }
    }
    
    proficency.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    strengthButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    dexterityButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    constitutionButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    intelligenceButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    wisdomButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
    charismaButton.click(function (e) {
        let value = e.target.value
        getApi(value)
    })
})