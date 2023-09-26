#!/bin/bash

# remove existing deployment
ssh -p 2222 s368090@se.ifmo.ru "rm -rf wildfly/wildfly-21.0.0.Final/standalone/deployments/MVC-GeoValidator.war"
# add new deployment
scp -P 2222 ./target/MVC-GeoValidator.war s368090@se.ifmo.ru:wildfly/wildfly-21.0.0.Final/standalone/deployments