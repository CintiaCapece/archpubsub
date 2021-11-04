const mqtt = require('mqtt');
//const match = require('mqtt-match');


//Suscripción
const subscribeTopic = (client) => {
    client.subscribe(`${topic}`, err => {
        if (!err) {
            console.log("[MQTTSERVICE][SUSCRIBE]", topic)
        }
    })
}

// Desuscripción de tópico
const unsubscribeTopic = (topic_aux) => {
    client.unsubscribe(topic, err => {
        if (!err) {
            console.log("[MQTTSERVICE][UNSUSCRIBE]", topic)
        }
    })
}

module.exports = {
    subscribeTopic,
    unsubscribeTopic,
    messageTopic,
}