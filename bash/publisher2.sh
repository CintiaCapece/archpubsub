#!/bin/bash

echo "Publicador 2 "
while true
do
sleep 2
mosquitto_pub -h localhost -t RAIZ/NODOUNO -m "Evento 1 - Publicador 2"
sleep 1
mosquitto_pub -h localhost -t RAIZ/NODODOS -m "Evento 2 - Publicador 2"
done