class DatabaseService { 
    save(email, price, time) {
        console.log(`Saving into DB: Email: ${email}, Price: ${price}, Time: ${time}`);
    } 
}

module.exports = DatabaseService;