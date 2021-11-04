#!/bin/bash
for i in 1 2 3 4 5 
do
    echo "Suscriptor $i "
	mosquitto_sub -h localhost -t RAIZ/NODO &
    echo "Publicador $i "
    mosquitto_pub -h localhost -t RAIZ/NODO -m "message_to_send"
    sleep 1
done