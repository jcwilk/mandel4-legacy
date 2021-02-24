UPDATE - the webpack boilerplate ended up being more of a headache to set up and maintain than it was helpful so I figured I'd just whip a webpack repo up from scratch instead which is now at jcwilk/mandel4 - This repo is just being kept for convenience.

# Mandel4

The fourth iteration of my mandelbrot explorers, this time giving `pixi-typescript-boilerplate` with VSCode a shot.

It's configured to build into `docs` which is under version control for the purposes of being able to easily serve this from github pages.

## Commands:

-   `npm run build` - starts build procedure for production and deletes all old builds (these are checked in for Github Pages under /docs)
-   `npm run dev` - start watching for files and open's server on localhost:8080
-   `npm run test` - run tests
-   `npm run code-coverage` - generate code coverage report
-   `npm run code-style-check` - run's eslint and prettier check on your code
