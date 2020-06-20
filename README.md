# TypeScript boilerplate

A simple starter kit project for building libraries with Typescript. It comes with pretty standard tsconfig.json for both project and testing, `.env` support and alias linking (which is not supported by default in TS).

## Getting started

1. clone the project
2. `yarn`

## Commands

- `yarn test`: Single testing (with ts-jest)
- `yarn start`: Continous testing with (ts-jest)
- `yarn build`: Compiles to Typescript
- `yarn deploy`: Publish to npm

## Notes

- There's a `domain.d.ts` file in which you can express your own application domain.
- In case you have non-global types that you want to expose in order to use them in your domain file, you'll have to import them in the `global.d.ts` file and later alias them.
