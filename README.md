# About this project
This is the code that is serving<a href="https://victormwangi.netlify.app/"> my portfolio</a>. <br>
It is a front end that is made with React js. I used <a href="https://tailwindcss.com/">TailwindCSS</a> for styling.<br>
The TailwindCSS is intergrated with Emotion and React Styled components using <a href="https://github.com/ben-rogerson/twin.macro.git">twin.macro</a> <br>
The project shows my ability to translate UI designs to actual code, working with React js, intergrating front end applications with CRUD backends through APIs - currently working with REST API.<br>

The following are navigable links within the live version: 
<ul>
<li>{host}/ and {host}/home => this two will take you to the landing page</li>
<li>{host}/contacts => This link will present to you a form that you can use to contact me </li>
<li>{host}/about and {host}/victor-mwangi => This two will take you to a page that provides my resume, qualifications and skills</li>
<li>{host}/projects => Here is where I provide links to the currently live projects</li>
<li>{host}/articles => Here is a small section that contains blogs and articles I write</li>
<li>{host}/article/:id/:name => You can use this to navigate to a specific article.</li>
</ul>

# SETTING UP

## Requirements

This is a react application created with npx create-react-app

You will need:
<ul>
<li>Node</li>
<li>npm</li>
<li>yarn</li>
</ul>
(You can use npm and yarn interchangeably from now on)

## Installation

`$ git clone https://github.com/vikie1/frontend-portfolio.git` => clone the repsitory<br>
`$ cd frontend-portfolio` => You shou see a yarn.lock/package-lock.json<br>
`$ yarn install` => this creates a node_modules folder with all the dependencies. (You can replace yarn with npm).

## Running
By now you have all the dependacies installed and set up. To run it follow the following instructions: 
`$ yarn start` => This creates a local development server for testing<br>
`$ yarn build` => This creates an optimized production build. Due to tailwindcss, craco will be used to build.<br>
`$ yarn serve` => This will run the production server locally


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
