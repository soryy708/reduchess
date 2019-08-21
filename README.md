# ReduChess

Transaction-based Chess online game in NodeJS.

# How to build / run

Many tasks are automated via scripts, using [_npm_](https://docs.npmjs.com/misc/scripts), [_gulp_](https://www.npmjs.com/package/gulp), & [_batch_](https://en.wikipedia.org/wiki/Batch_file) scripts.
Such scripts reside in [`package.json`](https://github.com/soryy708/nodejs-app-quick-start/blob/master/package.json) and in the [`scripts`](https://github.com/soryy708/nodejs-app-quick-start/tree/master/scripts) directory.

* Building
    * Build everything: `npm run build`
    * Build just front / api: `npm run build-front` or `npm run build-api` respectively
    * Build & rebuild if changes detected: `npm run autobuild-front` or `npm run autobuild-api`
* Running
    * Run everything: `npm start`
    * Run just front / api: `npm run start-front` / `npm run start-api` respectively
    * Run all tests: `npm test`
    * Run just front / api tests: `npm run test-front` / `npm run test-api` respectively
    * Run & rerun tests if changes detected: `npm run autotest-front` or `npm run autotest-api`
* For a simple, one-action set up for development, run [`start-dev.bat`](https://github.com/soryy708/nodejs-app-quick-start/blob/master/start-dev.bat) in the root directory.
This builds everything & rebuilds if changes are detected, runs everything, and opens VSCode.

# Conventions

## Architecture

### Front end

The game follows the [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) architecture.

* [controller](https://github.com/soryy708/reduchess/tree/master/src/front/game/controller) handles user interaction. It updates the [model](https://github.com/soryy708/reduchess/tree/master/src/front/game/model).
* [model](https://github.com/soryy708/reduchess/tree/master/src/front/game/model) handles state. It updates the [view]().
* [view](https://github.com/soryy708/reduchess/tree/master/src/front/game/view) handles presentation. It controls HTML / CSS.

## Tests

* All tests are in their own files, ending with `.test.js`
