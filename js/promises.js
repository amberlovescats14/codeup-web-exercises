console.log(GITHUB_KEY)

const getRepos = (username) => {
    let headers = {
        "Authorization" : `token ${GITHUB_KEY}`
    }
    let repoURL = `https://api.github.com/users/${username}/repos`
    fetch(repoURL, headers)
        .then(res => res.json())
        .then(data => waitRepos(1000, data))
        .catch(e => console.log(e.message))
}



const waitRepos = (num, data) => {
    let ten = data.filter((d,i)=> i < 10)
    ten.forEach(t => console.log(t.name))
}
getRepos('amberlovescats14')




const getLastCommit = (username) => {
    let date
    let headers = {
        'Authorization': `token ${GITHUB_KEY}`
    }
    let url = `https://api.github.com/users/${username}/events`
    fetch(url, headers)
        .then(res => res.json())
        .then(data => {
            let filter = data.filter(d => d.type === 'PushEvent')
            console.log("here: ",filter[0].created_at)
            date = filter[0].created_at
        })
    
    return date
}
console.log("function: ", getLastCommit('amberlovescats14'))


const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        },num)
    })
}

wait(1000)
    .then(()=> console.log(`You will see this after said seconds`))