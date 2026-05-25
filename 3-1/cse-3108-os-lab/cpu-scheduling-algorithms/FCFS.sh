#!/bin/bash

echo -n "Enter the number of processes: "
read n

declare -a bt wt tat processes

for ((i=0; i<n; i++))
do
    wt[$i]=0
    tat[$i]=0
    processes[$i]=$((i+1))
done


for ((i=0; i<n; i++))
do
    echo -n "Enter Burst Time for process-$((i+1)): "
    read bt[$i]
    
    if [ $i -eq 0 ]
    then
        wt[$i]=0
    else
        wt[$i]=${tat[$((i-1))]}
    fi
    
    tat[$i]=$(( ${wt[$i]} + ${bt[$i]} ))
done


echo -e "\nExecution Order: "
echo -n "["
for ((i=0; i<n; i++))
do
    echo -n "P${processes[$i]}"
    if [ $i -lt $((n-1)) ]
    then
        echo -n " > "
    fi
done
echo "]"


echo -e "\nProcess\tBurst Time\tWaiting Time\tTurnaround Time"
for ((i=0; i<n; i++))
do
    echo -e "P$((i+1))\t${bt[$i]}\t\t${wt[$i]}\t\t${tat[$i]}"
done


total_wt=0
total_tat=0
for ((i=0; i<n; i++))
do
    total_wt=$((total_wt + ${wt[$i]}))
    total_tat=$((total_tat + ${tat[$i]}))
done

avg_wt=$(echo "scale=2; $total_wt / $n" | bc)
avg_tat=$(echo "scale=2; $total_tat / $n" | bc)

echo -e "\nAverage Waiting Time: $avg_wt"
echo "Average Turnaround Time: $avg_tat"
