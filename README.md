# boilerplate-node-express

Boilerplate for a Node/Express server with Mocha and Babel/ES2015.

### Directory Structure

```
.
├──client                       # Client side code
│  └── dist                     # Public folder
│      └── index.html           # Application start page
├──server                       # Server side code
│  └── src                      # Server side code
│  |   ├── config.js            # Configuration
│  |   ├── core.js              # Core functionality
│  |   ├── index.js             # Entry script, starts node server
│  |   ├── logger.js            # Winston logging to console/loggly
│  |   └── router.js            # Express route functions
│  ├── test                     # Test code
│  |   ├── express_app_spec.js  # Mocha tests for express app
│  |   └── helper.js            # Mocha setup
│  ├── .babelrc                 # Babel config
│  ├── .eslintrc                # ESLINT config
│  └── package.json             # Manages server npm packages 
|  .gitignore                   # Git ignore
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
**dev** runs lint:watch, test:watch, and start:watch simultaneously  
**postinstall** installs client node modules and runs client webpack script  