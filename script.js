
const contactBook = {

    info: [{name: 'John', phone: 12342345, email: 'john@test.com'}, 
           {name: 'Kai', phone: 98765400, email: 'kai@teast.com'}, 
           {name: 'Peter', phone: 67854322, email: 'peter@test.com'}],

    search: function(name) {
        return this.info.filter(elem => elem.name.toLowerCase() === name.toLowerCase());
    },

    addContact: function(contact) {
        const newContact = Object.assign({}, contact);
        this.info.push(newContact);
    }
};

console.log(contactBook.search('John'));
contactBook.addContact({name: 'Phil', phone: 98767944, email: 'phil@test.com'});
contactBook.addContact({name: 'Sarah', phone: 90087776, email: 'sarah@test.com'});
console.log(contactBook.info);