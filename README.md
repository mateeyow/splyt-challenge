# Splyt Challenge

My solution for the splyt challenge. 

## DEMO

[https://splyt-challenge.netlify.app/](https://splyt-challenge.netlify.app/)

## Prerequisite

- NodeJS >= v12.20.0
- Yarn

## Folder structure

- [app](/app) - Contains the front-end application logic. It is bootstrapped by using [create-react-app](https://create-react-app.dev/)
- [server](/server) - Contains the back-end logic to fetch data from splyt api. This is needed as there is a CORS problem when fetching from the front-end. 

## Running the application

1. Run `make init` to download all the node_modules
1. Run `make start_server` to run the api/back-end
1. Run `make start_app` to run the application


## Dependency used

- Create React Application
- Leaflet
- Styled Components
- ExpressJS
- Axios
