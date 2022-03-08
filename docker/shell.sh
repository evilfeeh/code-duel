#!/bin/bash
project='show-me-the-code'
docker build -t $project ./
docker run $project