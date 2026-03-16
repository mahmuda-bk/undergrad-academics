#!/bin/bash

echo "Tell your name: "
read name
echo "Hello $name"

echo ""

echo -n "Name: "
read stu_name

read -p "Age: " age

read -p "Semester: " semester

echo -e "I am $stu_name. I am $age years old. My running semester number is $semester.\n"

name=sunny
age=50
dirname=/usr/aa5

echo $name $age $dirname

a=20
echo $a
echo a

echo ""

a=20
b=10

echo "Addition: $((a+b))"
echo "Subtraction: $((a-b))"
echo "Multiplication: $((a*b))"
echo "Division: $((a/b))"
echo "Modulus: $((a%b))"

echo ""

echo $(expr $a + $b)
echo $(expr $a - $b)
echo $(expr $a \* $b)
echo $(expr $a / $b)
echo $(expr $a % $b)
