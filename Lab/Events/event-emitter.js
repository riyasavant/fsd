const TicketManager = require("./ticketManager"); 
const DatabaseService =require("./databaseService"); 
const EmailService = require("./emailService");

const ticketManager = new TicketManager(); 
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timeStamp) => {
    emailService.send(email);
    databaseService.save(email, price, timeStamp);
});

ticketManager.on("error", (err) => {
    console.log(`Handling the error: ${err}`);
});

const onBuy = () => {
    console.log("I will be removed soon");
}

ticketManager.on("buy", onBuy);
console.log(`Listener count for buy: ${ticketManager.listenerCount("buy")}`);
ticketManager.buy("riyasavant@gmail.com", 100);
ticketManager.off("buy", onBuy);
console.log(`Listener count for buy: ${ticketManager.listenerCount("buy")}`);
ticketManager.removeAllListeners("buy");
console.log(`Listener count for buy: ${ticketManager.listenerCount("buy")}`);
ticketManager.removeAllListeners("buy");
console.log("Last ticket was bought");