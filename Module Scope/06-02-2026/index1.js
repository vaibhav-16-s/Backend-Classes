// const event=require("events");
// const EventEmitter=new event.EventEmitter;

// const eventhandler=()=>{
//     console.log("start preparing pizza");
// }

// EventEmitter.on("order_pizza",()=>{
//     console.log("order received");
// });
// EventEmitter(order_pizza);



const event = require("events");
const EventEmitter = new event.EventEmitter();

const eventHandler = () => {
    console.log("start preparing pizza");
};

EventEmitter.on("order_pizza", () => {
    console.log("order received");
    eventHandler();
});

EventEmitter.emit("order_pizza");
