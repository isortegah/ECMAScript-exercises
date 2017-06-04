/**
* Created by ISORTEGAH on 03/06/2017.
**/
var deliveryBoy = {
    name: "Ivan Sebastian",

    handlerMessage: function (message, handler) {
        handler(message);
    },

    receive: function () {

        this.handlerMessage("Hello, ", message => console.log(message + this.name));
    }
};

deliveryBoy.receive();
