---
title: TypeScript
description: Can has Superset?
position: 7
category: JavaScript
---

## TypeScript

TypeScript is a superset of JavaScript and is used to write
code which is preprocessed into JavaScript at build time.

There is not yet an 'official' guide or convention but most
rules you use for your JavaScript code should extend to
suitability for TypeScript as well. At this time TypeScript
is not extensively deployed in projects with AnalogFolk.

The following advice is borrowed heavily from [Basarat Al Syed][ts-book]

[ts-book]: https://basarat.gitbook.io/typescript/styleguide

### Interface

- Use `PascalCase` for name. Don't prepend with I
- Use `camelCase` for members

### Type

- Use `PascalCase` for name
- Use `camelCase` for members

### Namespace

- Use `PascalCase` for names.

### Enum

- Use `PascalCase` for enum names
- Use `PascalCase` for enum member

### Null vs. Undefined

- Prefer not to use either for explicit unavailability

#### Bad

```typescript
let foo = { x: 123, y: undefined }
```

#### Good

```typescript
let foo: { x: number; y?: number } = { x: 123 }
```

- Use undefined in general (do consider returning an object like `{valid:boolean, value?:Foo}` instead)

#### Bad

```typescript
return null
```

#### Good

```typescript
return undefined
```

- Use null where it's a part of the API or conventional

> Reason: It is conventional in Node.js e.g. error is null for NodeBack style callbacks.

- Use truthy check for objects being null or undefined

### Formatting

IDEs should be used which allow typescript support and
automatic formatting. It's also possible to use `tsfmt` on the command line.

- Prefer single quotes
- Use 2 space, not tabs
- Use semicolons

#### Arrays

Annotate arrays as `foos: Foo[]` instead of `foos: Array<Foo>`

> It's easier to read and is used by the TypeScript team.

#### type vs. interface

- Use `type` when you _might_ need a union or intersection.
- Use `interface` when you want `extends` or `implements`
- Otherwise, use what you prefer
