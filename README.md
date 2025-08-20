# Polls Types

A unified TypeScript repository that defines API contracts for both Polls Backend Service and Polls Response Service using the [@airtasker/spot](https://github.com/airtasker/spot) framework.

## 🏗️ Project Structure

```
Polls-types/
├── api.ts                    # Main API contract definition
├── polls-be/                 # Polls Backend API Types
│   ├── src/
│   │   ├── endpoints/        # Backend service endpoints
│   │   ├── models/           # Data models and constants
│   │   └── responses/        # Response type definitions
│   └── package.json
├── polls-response/            # Polls Response API Types
│   ├── src/
│   │   ├── endpoints/        # Response service endpoints
│   │   ├── models/           # Data models and constants
│   │   ├── parameters/       # Request parameters
│   │   └── responses/        # Response type definitions
│   └── package.json
├── dist/                     # Generated output (build artifacts)
├── package.json              # Root package with workspaces
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install
# or
yarn install
```

### Running the Project
```bash
# Build TypeScript files
npm run build

# Generate OpenAPI specification
npm run generate

# Build HTML documentation
npm run build:docs

# Validate API contract
npm run validate
```

## 📚 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript files to JavaScript |
| `npm run generate` | Generate OpenAPI 3.0 specification |
| `npm run build:docs` | Build interactive HTML documentation |
| `npm run validate` | Validate the API contract |
| `npm run docs` | Generate basic documentation |


## 🌐 Viewing Documentation

The generated HTML documentation can be viewed by opening `dist/index.html` in a web browser. It provides an interactive interface to explore all API endpoints, request/response schemas, and examples.

## 🏢 Service Architecture

### Polls Backend Service
Handles core poll management functionality:
- Poll CRUD operations
- Poll state management
- Results aggregation and export
- AI-powered features for poll configuration

### Polls Response Service
Manages user interactions with polls:
- Poll response submission
- Response management
- User-specific poll queries

## 🔍 Development Workflow

1. **Define endpoints** in respective service directories
2. **Update models** and response types as needed
3. **Run validation** to ensure contract integrity
4. **Generate documentation** for API consumers
5. **Build** for deployment

## 🚨 Troubleshooting

### Common Issues

**Build fails with "No inputs found"**
- Ensure `api.ts` is in the root directory
- Check that `tsconfig.json` includes the correct paths

**Generate fails with "File not found"**
- Verify `api.ts` exists in the root directory
- Check that the generate script path is correct

**Validation fails**
- Run `npm run validate` to see specific contract errors
- Check endpoint definitions for syntax issues

### Getting Help
- Check the generated `dist/api.json` for OpenAPI validation
- Review TypeScript compilation errors in the build output
- Ensure all imported endpoint files exist and are properly structured

## 📝 Contributing

When adding new endpoints or modifying existing ones:

1. Update the appropriate service directory (`polls-be/` or `polls-response/`)
2. Import new endpoints in `api.ts`
3. Run validation to ensure contract integrity
4. Update documentation as needed

## 📄 License

This project is part of the Simpplr platform and is subject to the project's licensing terms.
