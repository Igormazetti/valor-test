# Valor technical test

This repository demonstrates a microfrontends architecture using multiple build tools (Vite, and Webpack) working together. The main goal of this project is to serve as a reference implementation for deploying microfrontends on the [Zephyr](https://zephyr-cloud.io/) platform.

## Overview

- **Microfrontends**: Each subproject (host and remotes) is built with a different tool, showcasing interoperability.
- **Deployment**: Designed for seamless deployment and integration on the Zephyr platform.
- **Reference**: Follows the [official Zephyr documentation](https://docs.zephyr-cloud.io/recipes/vite-rspack-webpack-mf).

## Getting Started

In the root directory, run the following commands in order:

```bash
pnpm install
pnpm build
```

## Resources

- [Zephyr Documentation: Vite + Rspack + Webpack Microfrontends](https://docs.zephyr-cloud.io/recipes/vite-rspack-webpack-mf)
