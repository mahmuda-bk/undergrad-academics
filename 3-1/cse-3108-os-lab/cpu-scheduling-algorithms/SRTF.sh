#!/bin/bash

echo -n "Enter the number of processes: "
read n

declare -a at bt rt wt tat ct pid
declare -a completed
time=0
done_count=0
prev_process=-1
exec_order=()

for ((i=0; i<n; i++))
do
    echo "Process P$((i+1)):"
    echo -n "  Enter Arrival Time: "
    read at[$i]
    echo -n "  Enter Burst Time: "
    read bt[$i]
    rt[$i]=${bt[$i]} 
    pid[$i]=$((i+1))
    completed[$i]=0
done

while [ $done_count -lt $n ]
do
    shortest=-1
    min_rt=99999
    
    for ((i=0; i<n; i++))
    do
        if [ ${completed[$i]} -eq 0 ] && [ ${at[$i]} -le $time ] && [ ${rt[$i]} -lt $min_rt ] && [ ${rt[$i]} -gt 0 ]
        then
            min_rt=${rt[$i]}
            shortest=$i
        fi
    done
    
    if [ $shortest -eq -1 ]
    then
        time=$((time + 1))
        continue
    fi

    if [ $prev_process -ne $shortest ]
    then
        exec_order+=("P${pid[$shortest]}")
        prev_process=$shortest
    fi

    time=$((time + 1))
    rt[$shortest]=$(( ${rt[$shortest]} - 1 ))

    if [ ${rt[$shortest]} -eq 0 ]
    then
        completed[$shortest]=1
        done_count=$((done_count + 1))
        ct[$shortest]=$time
        tat[$shortest]=$(( ${ct[$shortest]} - ${at[$shortest]} ))
        wt[$shortest]=$(( ${tat[$shortest]} - ${bt[$shortest]} ))
    fi
done

echo -e "\nExecution Order (Preemptive SJF / SRTF):"
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

echo -e "\nProcess\tAT\tBT\tCT\tWaiting Time\tTurnaround Time"
for ((i=0; i<n; i++))
do
    echo -e "P${pid[$i]}\t${at[$i]}\t${bt[$i]}\t${ct[$i]}\t${wt[$i]}\t\t${tat[$i]}"
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
