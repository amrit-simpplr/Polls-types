# Polls Types Package Integration

This package provides shared TypeScript types for the Polls system. The backend can import types from this package.

## Structure

```
Polls-types/
├── index.ts                    # Main entry point (exports all types)
├── api.ts                      # API contract using @airtasker/spot
├── polls-be/                   # Polls backend types
│   └── src/
│       ├── index.ts
│       ├── endpoints/          # API endpoint definitions
│       ├── models/             # Data models
│       └── responses/          # Response types
└── polls-response/             # Polls response types
    └── src/
        ├── index.ts
        ├── endpoints/          # API endpoint definitions
        ├── models/             # Data models
        ├── parameters/         # Request parameters
        └── responses/          # Response types
```

### 1. Install the Package

```bash
# From your backend directory (Polls/polls-be)
npm install ../../Polls-types
# or
yarn add ../../Polls-types
```

## Building the Package for docs

```bash
# Build the types package
npm run build

# Generate OpenAPI documentation
npm run generate

# Build documentation
npm run build:docs
```