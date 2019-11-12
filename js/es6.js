/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
let name = 'Amber Jones';
let email = 'amberlovescats14@gmail.com';
let languages = ['java', 'javascript', 'python'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
const pushEmails = (obj) => {
  obj.forEach(user => emails.push(user.email))
}

const pushNames = (obj) => {
  obj.forEach(user => names.push(user.name))
}


//*******************
  let developers = []
const destructor = (arr) => {
  arr.forEach(({name, email, languages})=>{
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`)
  })
  return developers
}
// *******************
var list = '<ul>';

for (let deveoper of developers) {
  list += `<li>${deveoper}</li>`
}

list += '</ul>';
