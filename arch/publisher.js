const mqtt = require('mqtt');
//const match = require('mqtt-match');

var client;

//Parámetros de Conexión Mqtt
const host = 'mqtt://node02.myqtthub.com'
const topic = 'esp/led'
const parametrosConexion = {
    port: 1883,
    host: 'mqtt://node02.myqtthub.com',
    clientId: 'cintiflor@gmail.com',
    username: 'ryuseiottawa',
    password: 'G1PePaXB-vQaiW4R8',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};//[host,port,username,password,clientId]

// Conexion Mqtt
const init = () => {
    client = mqtt.connect(host,parametrosConexion);
    client.on('connect', () => {
        console.log("[MQTTSERVICE][CONNECTED]");
        // Donde se suscribió computer-vehicle
        subscribeTopic();
        // Obtencion del mensaje del topico suscripto
        messageTopic();
        // Donde y que mensaje publica computer-vehicle
        publishTopic("Luciano: Hola");
    });
}

//Obtencion del mensaje
const messageTopic = () => {
    client.on('message',function(topic, message, packet){
        if(message)
        console.log("message is "+ message.toString());
        console.log("topic is "+ topic);
    });
}

// Publicación
const publishTopic = (message) => {
    console.log("[MQTTSERVICE][PUB]", topic)
    client.publish(`${topic}`, message)
    console.log("[MQTTSERVICE][PUB MESSAGE]", message)
}

module.exports = {
    messageTopic,
    publishTopic,
}