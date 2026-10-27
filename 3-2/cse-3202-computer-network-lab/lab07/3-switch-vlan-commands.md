***For all switches:***

vlan 10

name CSE

exit



vlan 20

name ICT

exit



vlan 30

name EEE

exit







***Switch 1:***

int fa0/1

switchport access vlan 10

exit

int fa0/2

switchport access vlan 10

exit

int fa0/3

switchport access vlan 10

exit

int fa0/4

switchport access vlan 20

exit

int fa0/5

switchport access vlan 20

exit

int fa0/6

switchport access vlan 20

exit

int fa0/7

switchport access vlan 30

exit

int fa0/8

switchport access vlan 30

exit

int fa0/9

switchport access vlan 30

exit



int fa0/10 

switchport mode trunk

exit

int fa0/11

switchport mode trunk

exit

interface range fa0/1-9

switchport mode access

exit







***Switch  2:***

int fa0/1

switchport access vlan 10

exit

int fa0/2

switchport access vlan 10

exit

int fa0/3

switchport access vlan 10

exit

int fa0/4

switchport access vlan 20

exit

int fa0/5

switchport access vlan 20

exit

int fa0/6

switchport access vlan 20

exit

int fa0/7

switchport access vlan 30

exit

int fa0/8

switchport access vlan 30

exit

int fa0/9

switchport access vlan 30

exit



int fa0/10 

switchport mode trunk

exit

int fa0/11

switchport mode trunk

exit

interface range fa0/1-9

switchport mode access

exit







***Switch 3:***

int fa0/1

switchport access vlan 10

exit

int fa0/2

switchport access vlan 10

exit

int fa0/3

switchport access vlan 10

exit

int fa0/4

switchport access vlan 20

exit

int fa0/5

switchport access vlan 20

exit

int fa0/6

switchport access vlan 20

exit

int fa0/7

switchport access vlan 30

exit

int fa0/8

switchport access vlan 30

exit

int fa0/9

switchport access vlan 30

exit



int fa0/10 

switchport mode trunk

exit

int fa0/11

switchport mode trunk

exit

interface range fa0/1-9

switchport mode access

exit




***Result:***

Traffic cannot pass between different VLANs, but it works within the same VLAN.



