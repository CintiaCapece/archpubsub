#!/bin/bash

echo "Publicador 1 "
while true
do
sleep 5
mosquitto_pub -h localhost -t RAIZ/NODOUNO -m "Evento 1 - Publicador 1"
done
