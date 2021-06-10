#!/bin/bash

for((i=99;i<200;i++))

do 
echo $i
filenamePrefix="component_process_test" 
filenameSuffix="${i}.json"
filename="$filenamePrefix$filenameSuffix"
echo $filename
curl -k -u admin:admin https://10.14.32.73:8443/cli/componentProcess/create -d @$filename -X PUT
done