# Product Listing

## Overview
1. Product Listing compose two containers   
+ Frontend (universal React/Redux)   
+ Backend (Node/Express)   
2. Why there is addional backend?   
+ Intial load of products.json is slow (and slower with 10000 products, etc...)  
+ There is a quota on api calls per day if application consume external APIs
+ Complex modeling of business logic should resides in server

## Run manually
1. Run backend then frontend  
2. Commands   
'''
yarn install
yarn test
yarn start
'''

## Run with Docker Compose
1. Dev   
'''
docker-compose build
docker-compose up
'''

2. Test    
'''
docker-compose -f docker-compose-test.yml build
docker-compose -f docker-compose-test.yml up
'''



