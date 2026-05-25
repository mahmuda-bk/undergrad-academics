#!/bin/bash

echo -n "Enter the number of processes: "
read n

echo "Enter time quantum: "
read tq

declare -a bt rt wt tat pid
time=0
done_count=0
exec_order=()


for ((i=0; i<n; i++))
do
    echo -n "Enter burst time for process-$((i+1)): "
    read bt[$i]
    rt[$i]=${bt[$i]}  
    wt[$i]=0
    tat[$i]=0
    pid[$i]=$((i+1))
done


while [ $done_count -lt $n ]
do
    for ((i=0; i<n; i++))
    do
        if [ ${rt[$i]} -gt 0 ]
        then

            exec_order+=("P${pid[$i]}")

            if [ ${rt[$i]} -le $tq ]
            then
                time=$((time + ${rt[$i]}))
                rt[$i]=0
                done_count=$((done_count + 1))
                tat[$i]=$time
                wt[$i]=$(( ${tat[$i]} - ${bt[$i]} ))
            else
                time=$((time + tq))
                rt[$i]=$(( ${rt[$i]} - tq ))
            fi
        fi
    done
done

echo -e "\nExecution Order: "
echo -n "["
for ((i=0; i<${#exec_order[@]}; i++))
do
    echo -n "${exec_order[$i]}"
    if [ $i -lt $((${#exec_order[@]} - 1)) ]
    then
        echo -n " > "
    fi
done
echo "]"


echo -e "\nProcess\tBurst Time\tWaiting Time\tTurnaround Time"
for ((i=0; i<n; i++))
do
    echo -e "P${pid[$i]}\t${bt[$i]}\t\t${wt[$i]}\t\t${tat[$i]}"
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
