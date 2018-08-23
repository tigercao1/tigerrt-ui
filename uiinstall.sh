#!/bin/bash
au build
aws s3 rm s3://thehiddentent.com --recursive
aws s3 cp dist s3://thehiddentent.com --recursive
npm run deploy
