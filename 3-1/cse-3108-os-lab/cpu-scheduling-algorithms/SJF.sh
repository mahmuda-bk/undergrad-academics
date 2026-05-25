#!/bin/bash

echo -n "Enter number of processes: "
read n

declare -a bt wt tat p

for ((i=0; i<n; i++))
do
    p[$i]=$((i+1))
done

for ((i=0; i<n; i++))
do
    echo -n "Burst Time for Process-$((i+1)): "
    read bt[$i]
done

for ((i=0; i<n-1; i++))
do
    for ((j=i+1; j<n; j++))
    do
        if [ ${bt[$i]} -gt ${bt[$j]} ] || \
           ([ ${bt[$i]} -eq ${bt[$j]} ] && [ ${p[$i]} -gt ${p[$j]} ])
        then
            temp=${bt[$i]}
            bt[$i]=${bt[$j]}
            bt[$j]=$temp

            tempP=${p[$i]}
            p[$i]=${p[$j]}
            p[$j]=$tempP
        fi
    done
done

for ((i=0; i<n; i++))
do
    if [ $i -eq 0 ]
    then
        wt[$i]=0
    else
        wt[$i]=$(( ${wt[$((i-1))]} + ${bt[$((i-1))]} ))
    fi
    tat[$i]=$(( ${wt[$i]} + ${bt[$i]} ))
done


echo -e "\nExecution Order: "
echo -n "["
for ((i=0; i<n; i++))
do
    echo -n "P${p[$i]}"
    if [ $i -ne $((n-1)) ]
    then
        echo -n " > "
    fi
done
echo "]"

echo -e "\nProcess\tBT\tWT\tTAT"
for ((i=0; i<n; i++))
do
    echo -e "P${p[$i]}\t${bt[$i]}\t${wt[$i]}\t${tat[$i]}"
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
