(function () {
    "use strict"
    
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Amber',
        lastName: 'Jones',
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `Hello from ${this.firstName} ${this.lastName}`
    }
    
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ]
    const showDiscounts = arr => {
        let discount = .12
        arr.forEach(a => {
            if (a.amount > 200) {
                console.log(`
                Name: ${a.name} \t
                Spent: $${a.amount} \t
                Discount: 12% \t
                AmountDue: $${a.amount - (discount * a.amount)}`)
            }
            console.log(`
                 Name: ${a.name} \t
                 Spent: $${a.amount} \t
                 Discount: 0 \t
                 AmountDue: $${a.amount}`)
        })
        return null
        
    }
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    let books = [
        {
            title: 'The Art of Mastery',
            author: {
                firstName: `Robert`,
                lastName: `Greene`
            }
        },
        {
            title: `The Weight of the World`,
            author: {
                firstName: `David`,
                lastName: `Joy`
            }
        },
        {
            title: `Evelation`,
            author: {
                firstName: `Stephen`,
                lastName: `King`
            }
        },
        {
            title: `Snuff`,
            author: {
                firstName: `David`,
                lastName: `Palahniuk`
            }
        },
        {
            title: `To Dance With Kings`,
            author: {
                firstName: `Rosalind`,
                lastName: `Laker`
            }
        }
    ]
    
    //! CREATE
    const createBook = (title, author) => {
        let name = author.split(' ')
        let newBook =  {
            title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
        return addBook(newBook)
    }
    //! ADD
    const addBook = obj => {
        books.push(obj)
        console.log(`Book Added!`)
        return showBookInfo(books)
    }
    
    //!READ
    const showBookInfo = arr => {
        arr.forEach((a, i) => {
            console.log(`
                 Book # ${i + 1}
                 Title: ${a.title}
                 Author: ${a.author.firstName} ${a.author.lastName}
                 ------`
            )
            
        })
        return `Amber's Book Collection`
    }
    createBook(`The Laws of Human Nature`, `Robert Greene`)
    
})()
