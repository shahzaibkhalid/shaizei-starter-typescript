# shaizei-starter-kit

An official starter kit for React-TypeScript applications created with @shaizei/cli.

# Commands

Here's a brief summary of the commands that you can run inside the applications
created with `@shaizei/cli`.

Note that these commands are the ones that are available by default, you can extend
the applications in whatever way you want and add many more scripts of your choice.

## Starting Development Server

In order to start the development server, run the following command:

```shell
shaizei develop
```

## Building Production Bundles

In order to generate an optimized production bundle of your application, run the
following command:

```shell
shaizei build
```

## Running Linting

In order to run linting on all the files in `src/` directory, run the following
command:

```shell
shaizei lint
```

## Fixing Common Linting Errors

In order to fix common linting errors, run the following command:

```shell
shaizei lint-fix
```

## Analyzing Production Bundles

In order to analyze the production bundles, run the following command:

```shell
shaizei analyze
```

## Serving Production Bundles

In order to serve the production bundle locally, run the following command:

```shell
shaizei serve
```

## Running Prettier

In order to run Prettier throughout the codebase and to find the potential violations
of Prettier rules, run the following command:

```shell
shaizei prettier
```

## Fixing Prettier Issues

In order to fix Prettier formatting issues from command-line, run the following
command:

```shell
shaizei prettier-fix
```

## Find Potential Conflicts between Prettier & ESLint

ESLint can also do the part of job that Prettier is doing, in order to find if there
are any issues among ESLint & Prettier integration, run the following command:

```shell
shaizei eslint-prettier-integration
```
