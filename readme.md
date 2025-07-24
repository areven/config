

# @areven/config collection
[![Build status](https://img.shields.io/github/actions/workflow/status/areven/config/code-validation.yml?branch=main&style=flat&colorA=a76733&colorB=3c3c43)](https://github.com/areven/config/actions/workflows/code-validation.yml)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat&labelColor=a76733&color=3c3c43)](https://github.com/areven/config/blob/main/license.md)

**Shared configuration presets** for linting, formatting, and tooling — consistent across all our projects.

This monorepo contains the opinionated configurations we use at [Areven](https://areven.com) for both **open-source** and **closed-source** projects. These presets define how we write and maintain code — internally, externally, and consistently.


## Philosophy

These configs are intentionally opinionated. They reflect how we structure and write code at Areven, and are **used across all our projects** — internal and public.

We don’t aim for universal consensus. If something works well for us, we stick to it.

Unless there’s a **very compelling reason**, we do **not** make changes based on external feedback or trends. These settings evolve slowly and intentionally.

We’ve open-sourced these configurations **primarily to serve as a reference for contributors** to our open-source packages. If you’re contributing, this is the style guide — no surprises.


## Installation

Each package is published under the `@areven` scope. You can install them independently:

```bash
npm install --save-dev @areven/eslint-config
npm install --save-dev @areven/commitlint-config
# and so on...
```

Refer to the individual package READMEs for usage instructions.


## For contributors

This repository exists for maintainability and consistency across Areven projects.

**If you’re contributing internally:** stick to the conventions.

**If you’re browsing externally:** feel free to use what works for you, but know that we won’t support use cases outside our scope.


## License

All configuration packages are [MIT licensed](https://github.com/areven/config/blob/main/license.md).
