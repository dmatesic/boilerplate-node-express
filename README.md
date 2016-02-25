# boilerplate-node-express

Boilerplate for a Node/Express server with Mocha and Babel/ES2015.

### Directory Structure

```
.
├──client                       # Client side code
│  └── dist                     # Public folder
│      └── index.html           # Application start page
├──server                       # Server side code
│  ├── src                      # Source code folder
│  |   ├── controllers          # Application logic folder 
|  |   |   ├── contacts.js      # Contacts controller
|  |   |   └── index.js         # Provides init functionality for controllers
│  |   ├── lib                  # Shared modules
|  |   |   ├── exception.js     # Custom exceptions
|  |   |   └── logger.js        # Handles logging
│  |   ├── routes               # Route definitions
|  |   |   ├── contacts.js      # /contacts route handling
|  |   |   └── index.js         # Provides init functionality for routes
│  |   ├── config.js            # Configuration
│  |   ├── index.js             # Project start file
│  |   ├── server.js            # Setup for express server
│  ├── test                     # Test folder
│  |   ├── routes               # Route tests
|  |   |   └── contact_spec.js  # Tests for contacts route
│  |   ├── server               # Server tests
|  |   |   └── server_spec.js   # Tests for server
│  |   └── helper.js            # Helper functions
│  ├── .babelrc                 # Babel config
│  ├── .eslintrc                # ESLINT config
│  └── package.json             # Manages server npm packages 
|  .gitignore                   # Git ignore
|  npm-shrinkwrap.json          # Lock down NPM dependencies 
|  package.json                 # Manages global npm script  
|  Procfile                     # Heroku config
|  README.md                    # Project info
```

### Installation

1. git clone https://github.com/dmatesic/boilerplate-node-express  
2. cd boilerplate-node-express  
3. npm install  
4. npm run server -- start

### NPM Scripts (root)

**postinstall** builds the project in /server  
**server** runs server command (e.g. npm run server -- test:watch)  

### NPM Scripts (/server)

**build** builds the project into dist/  
**lint** runs eslint  
**lint:watch** runs lint with restart on file change  
**test** runs mocha tests  
**test:watch** runs test with restart on file change  
**start** runs build and starts node server  
**start:watch** runs start with restart on file change  
**start:dev** starts babel-node server  
**start:dev:watch** runs start:dev with restart on file change  
**dev** runs lint:watch and test:watch simultaneously  
**postinstall** installs client node modules and runs client webpack script  