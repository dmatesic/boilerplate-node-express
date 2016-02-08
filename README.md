# boilerplate-node-express

Boilerplate for a Node/Express server with Mocha and Babel/ES2015.

### Directory Structure

```
.
├──client                   # Client side code
│  └── dist                 # Public folder
│      └── index.html       # Application start page
├──src                      # Server side code
│  ├── config.js            # Configuration
│  ├── core.js              # Core functionality
│  ├── logger.js            # Winston logging to console/loggly
│  └── router.js            # Express route functions
├──test                     # Test code
│  ├── express_app_spec.js  # Mocha tests for express app
│  └── helper.js            # Mocha setup
│  .babelrc                 # Babel config
│  .eslintrc                # ESLINT config
|  .gitignore               # Git ignore
|  index.js                 # Runs babel and calls start.js
|  package.json             # Manages npm packages 
|  Procfile                 # Heroku config
|  README.md                # Project info
|  start.js                 # Starts node server
```

### NPM Scripts

**lint** runs eslint
**lint:watch** runs eslint with restart on file change
**test** runs mocha tests
**test:watch** runs mocha tests with restart on file change
**start** runs node server
**start:watch** runs node server with restart on file change
**dev** runs lint:watch, test:watch, and start:watch simultaneously
**postinstall** installs client node modules and runs client webpack script
