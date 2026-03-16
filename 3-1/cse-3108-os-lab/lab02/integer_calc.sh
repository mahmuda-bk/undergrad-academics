#!/bin/bash

echo "Enter first integer:"
read a

echo "Enter second integer:"
read b

sum=$((a + b))
mul=$((a * b))

echo "Summation = $sum"
echo "Multiplication = $mul"
