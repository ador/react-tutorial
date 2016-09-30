#!/bin/bash
s1=server.go
s2=server.js
s3=server.php
s4=server.pl
s5=server.py
s6=server.rb

for script in "$s1" "$s2" "$s3" "$s4" "$s5" "$s6"; do
   cp "${script}" "${script}.orig"
   cat "${script}.orig" | sed -e 's/3000/3002/g' > "${script}"
done
