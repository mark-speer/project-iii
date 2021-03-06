# **CarbonFX** [![Build Status](https://travis-ci.com/WasteOfADrumBum/project-iii.svg?branch=main)](https://travis-ci.com/github/WasteOfADrumBum/project-iii)

![GitHub license](https://img.shields.io/badge/Front%20End%20Developer-%40WasteOfADrumBum-green)
![GitHub license](https://img.shields.io/badge/Front%20End%20Developer-%40maxgerringer-green)

![GitHub license](https://img.shields.io/badge/Back%20End%20Developer-%40jhf1203-green)
![GitHub license](https://img.shields.io/badge/Back%20End%20Developer-%40markspeer-green)
![GitHub license](https://img.shields.io/badge/Back%20End%20Developer-%40arodrigu1-green)

## Description

Carbon FX: An application made to track your carnonfootprint of your daily commute. 

### Why CarbonFX

CarbonFX brings value to the modern world of transportation by allowing users to track their carbon footprint they leave behind on their daily commute. By making users consciously aware of their carbon footprint we can help make a difference in the world. We calculate the carbon footprint left behind during a user's commute and compare that to various other forms of public and alternative transportation options giving measurable charts and statistics on how they can improve our environment. Transportation continues to contribute a large percentage of U.S. emissions, there are many opportunities to deliver greenhouse gas reductions. Low-carbon fuels, new and improved vehicle technologies, strategies to reduce the number of vehicle miles traveled, and operating vehicles more efficiently are all approaches to reducing greenhouse gases from transportation.

> "_Burning fossil fuels like gasoline and diesel releases carbon dioxide, a greenhouse gas, into the atmosphere. The buildup of carbon dioxide (CO2) and other greenhouse gases like methane (CH4), nitrous oxide (N2O), and hydrofluorocarbons (HFCs) is causing the Earth’s atmosphere to warm, resulting in changes to the climate we are already starting to see today. Greenhouse gas (GHG) emissions from transportation account for about 28 percent of total U.S. greenhouse gas emissions, making it the largest contributor of U.S. GHG emissions. Between 1990 and 2018, GHG emissions in the transportation sector increased more in absolute terms than any other sector._"

> © [E.P.A.](https://www.epa.gov/transportation-air-pollution-and-climate-change/carbon-pollution-transportation) - Carbon Pollution from Transportation

# Technologies Used

![GitHub top language](https://img.shields.io/github/languages/top/WasteOfADrumBum/project-iii?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/WasteOfADrumBum/project-iii?color=green&logo=github&logoColor=green)

<img src="https://i.morioh.com/139b757e13.png" width="220px">

| Technologies: |            |   M.E.R.N.    |
| :-----------: | :--------: | :-----------: |
|    Heroku     |  WorkBox   | MongoDB Atlas |
|     HTML5     | JavaScript |  Express.js   |
|  Bootstrap 4  | Travis CI  |   React.js    |
|     SCSS      |    CSS3    |    Node.js    |

## Table of contents

- [Installation](#installation)
- [Instructions](#instructions)
- [Features](#features)
- [Example Gif](#example-gif)
- [Repository Link](#Repository)
- [Test](#Test)
- [Licence](#Licence)

## Installation

```
npm i
```

Seed Robo3T (open terminal inside server/seeders/)

```
nodemon run seedDB.js
mongoimport --type csv -d project3_db -c VehicleInfo --headerline --drop vehicle-data.csv
```

### Dependencies

```
"@fortawesome/fontawesome-svg-core": "^1.2.32",
    "@fortawesome/free-brands-svg-icons": "^5.15.1",
    "@fortawesome/free-regular-svg-icons": "^5.15.1",
    "@fortawesome/free-solid-svg-icons": "^5.15.1",
    "@fortawesome/react-fontawesome": "^0.1.11",
    "@popperjs/core": "^2.5.4",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/googlemaps": "^3.0.0",
    "@types/markerclustererplus": "^2.1.29",
    "@types/react": "^15.0.0 || ^16.0.0",
    "axios": "^0.21.0",
    "bcryptjs": "^2.4.3",
    "bootstrap": "^4.5.3",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-mongo-sanitize": "^2.0.0",
    "express-rate-limit": "^5.1.3",
    "google-distance-matrix": "^1.1.1",
    "google-maps-react": "^2.0.6",
    "helmet": "^4.2.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^8.5.1",
    "jquery": "^3.5.1",
    "moment": "^2.29.1",
    "mongoose": "^5.10.13",
    "nodemon": "^2.0.6",
    "node-sass": "^4.14.1",
    "popper.js": "^1.16.1",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-cool-onclickoutside": "^1.5.8",
    "react-dom": "^17.0.1",
    "react-fontawesome": "^1.7.1",
    "react-google-maps": "^9.4.5",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.0",
    "react-select": "^3.1.1",
    "typescript": "^4.1.2",
    "use-places-autocomplete": "^1.6.0",
    "validator": "^12.0.0",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.3",
    "workbox-broadcast-update": "^5.1.3",
    "workbox-cacheable-response": "^5.1.3",
    "workbox-core": "^5.1.3",
    "workbox-expiration": "^5.1.3",
    "workbox-google-analytics": "^5.1.3",
    "workbox-navigation-preload": "^5.1.3",
    "workbox-precaching": "^5.1.3",
    "workbox-range-requests": "^5.1.3",
    "workbox-routing": "^5.1.3",
    "workbox-strategies": "^5.1.3",
    "workbox-streams": "^5.1.3"
    "xss-clean": "^0.1.1"
```

## Instructions

Link to deployed [Heroku App](https://unc-team1-project3.herokuapp.com/).

Due to a new security update from Google, this application is back under development and it unable to render on Heroku. We are working vigorously to get it back online, but for the time being it's still available in a developers mode while running it locally. 

Issue: Exposed API key in index.html is a security violation from Google forbidding Heroku to deploy the application. 

Resolution: converting the components using that script to make the calls using the back end of the application vs. the front end and using .env to hide the key.

## Features

Carbon FX features advanced user authentication and protection measures using JSON Web Token (JWT). This app allows for user's to create a secure profile that's stored in a MondoDB Atlas database. The user then can choose from over +50k vehicles and add their vehicle to thier profile store in the same database. The user can also use Google Places to find locations and sotre them in the database as well. The user can then use those store options to calculate the distance between two points and give options of modes of transportation and the carbon footprint that each option has. After choseing the options the route is then stored in to the user's database once again to provide visual charts of thier effects on the environment and how well they're comparing to the national average. 

## Example Gif

<img src="client/public/assets/images/carbonfx-demo.gif" width="500" />

### Design Layouts with Annotations describing all UI/UX components with all relevant screen data

<img src="client\public\assets\images\deliverables-01-02_5.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_0.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_1.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_2.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_3.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_4.png" width="500">

<img src="client\public\assets\images\deliverables-01-02_3.png" width="500">

## Repository

![GitHub repo size](https://img.shields.io/github/repo-size/WasteOfADrumBum/project-iii?logo=github)

![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/WasteOfADrumBum/project-iii)
![GitHub Last Commit](https://img.shields.io/github/last-commit/WasteOfADrumBum/project-iii)

![GitHubopen pull request](https://img.shields.io/github/issues-pr/WasteOfADrumBum/project-iii)
![GitHub closed pull request](https://img.shields.io/github/issues-pr-closed/WasteOfADrumBum/project-iii)

![GitHub Stars](https://img.shields.io/github/stars/WasteOfADrumBum/project-iii?style=social)

- [Project Repo](https://github.com/WasteOfADrumBum/project-iii)

## Contributors

![GitHub contributors](https://img.shields.io/github/contributors/WasteOfADrumBum/project-iii)
![GitHub Forks](https://img.shields.io/github/forks/WasteOfADrumBum/project-iii?label=Fork)
![GitHub Watchers](https://img.shields.io/github/watchers/WasteOfADrumBum/project-iii?label=Watch)

| <img src="https://avatars0.githubusercontent.com/u/66432859?v=460" width="50" />          | <img src="https://avatars1.githubusercontent.com/u/65460851?s=460" width="50" />       | <img src="https://avatars1.githubusercontent.com/u/66701459?s=460" width="50" />  | <img src="https://avatars3.githubusercontent.com/u/66832524?s=460" width="50" />     | <img src="https://avatars3.githubusercontent.com/u/66389835?s=460" width="50" />    |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [Joshua M. Small](https://github.com/WasteOfADrumBum)                                     | [Max Gerringer](https://github.com/maxgerringer)                                       | [Jim Faulkner](https://github.com/jhf1203)                                        | [Mark Speer](https://github.com/mark-speer)                                          | [Arlene Rodriguez](https://github.com/arodrigu1)                                    |
| <JMSmall89@gmail.com>                                                                     | <max.gerringer@gmail.com>                                                              | <jhf1203@gmail.com>                                                               | <mark.speer@yahoo.com>                                                               | <arlene.rodriguez1@gmail.com>                                                       |
| ![GitHub Followers](https://img.shields.io/github/followers/WasteOfADrumBum?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/maxgerringer?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/jhf1203?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/mark-speer?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/arodrigu1?label=Follow) |

### Role Breakdown:

#### Front End Developers

|        **Joshua**        |                **Max**                |
| :----------------------: | :-----------------------------------: |
|           SCSS           |      Component Content Creation       |
|           SEO            | Component Functionality with datasets |
|          UX/UI           |                 UX/UI                 |
|        Bootstrap         |                                       |
| Component Content Layout |                                       |
|    Heroku Deployment     |                                       |
|                          |                                       |

#### Back End Developers

|    **Jim**     |      **Mark**       |     **Arlene**      |
| :------------: | :-----------------: | :-----------------: |
| API Management | Database Management | Database Management |
|                |  Database Creation  |  Database Creation  |
|                |    MongoDB Atlas    |    MongoDB Atlas    |
|                |                     |                     |

## Test

<img src="https://travis-ci.com/images/logos/TravisCI-Mascot-1.png" width="50px">

Build tested by [Travis CI](https://travis-ci.org/)

![GitHub test](https://img.shields.io/badge/test-100%25-success)
[![Build Status](https://travis-ci.com/WasteOfADrumBum/project-iii.svg?branch=main)](https://travis-ci.com/github/WasteOfADrumBum/project-iii)

![GitHub open issues](https://img.shields.io/github/issues/WasteOfADrumBum/project-iii)
![GitHub closed issues](https://img.shields.io/github/issues-closed/WasteOfADrumBum/project-iii)

## Licence

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
