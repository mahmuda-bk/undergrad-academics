#!/bin/bash

echo "Enter first floating number:"
read a

echo "Enter second floating number:"
read b

sum=$(echo "scale=2; $a + $b" | bc)
mul=$(echo "scale=2; $a * $b" | bc)

echo "Summation = $sum"
echo "Multiplication = $mul"
