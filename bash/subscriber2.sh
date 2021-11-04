#!/bin/bash
echo "Suscriptor 2"
mosquitto_sub -h localhost -t RAIZ/NODOUNO &
mosquitto_sub -h localhost -t RAIZ/NODODOS 