# Changelog

## 4.5.2 (2025-09-30)


### ⚠ BREAKING CHANGES

* restructure management tools into specialized add/update tools ([#59](https://github.com/parthmodi152/todoist-ai-mcp/issues/59))
* verb-first tool names, unify find-by-container into find-tasks ([#53](https://github.com/parthmodi152/todoist-ai-mcp/issues/53))
* Remove single update task and replace with multiple ([#47](https://github.com/parthmodi152/todoist-ai-mcp/issues/47))
* Consolidate MCP tools to reduce tool count ([#14](https://github.com/parthmodi152/todoist-ai-mcp/issues/14))

### Features

* add comment tools ([#58](https://github.com/parthmodi152/todoist-ai-mcp/issues/58)) ([7d6ffca](https://github.com/parthmodi152/todoist-ai-mcp/commit/7d6ffcacd326ef755aba691436d44d6b534f6b4b))
* Add Docker deployment support and Easypanel templates ([025ebe7](https://github.com/parthmodi152/todoist-ai-mcp/commit/025ebe70b21024409cf1b62527415a041209d7c0))
* Add HTTP server and Smithery deployment support ([1c7666b](https://github.com/parthmodi152/todoist-ai-mcp/commit/1c7666b980c81ed83432d021592e376fe34f9bb9))
* add label support for add-tasks and update-tasks tools ([#103](https://github.com/parthmodi152/todoist-ai-mcp/issues/103)) ([a4bc708](https://github.com/parthmodi152/todoist-ai-mcp/commit/a4bc7085b5a63402970841e586ce985cab9022d0))
* Add npx support for MCP server usage ([#33](https://github.com/parthmodi152/todoist-ai-mcp/issues/33)) ([5ed0c5f](https://github.com/parthmodi152/todoist-ai-mcp/commit/5ed0c5f40615ab4afb61d0fcd9796c97e666b1f9))
* Add support for filtering by label ([#71](https://github.com/parthmodi152/todoist-ai-mcp/issues/71)) ([b608d32](https://github.com/parthmodi152/todoist-ai-mcp/commit/b608d32f7636a175dc62ca388892e9aef0834712))
* add support for task duration when adding or updating tasks ([#28](https://github.com/parthmodi152/todoist-ai-mcp/issues/28)) ([a0c6702](https://github.com/parthmodi152/todoist-ai-mcp/commit/a0c6702dd446173c86675ecadd975506ce594c42))
* add task assignment management ([#81](https://github.com/parthmodi152/todoist-ai-mcp/issues/81)) ([b9b1691](https://github.com/parthmodi152/todoist-ai-mcp/commit/b9b16916dec8f18efc37631d77f97354fae2194a))
* add tasks-add-multiple and tasks-update-one tools ([f7432e7](https://github.com/parthmodi152/todoist-ai-mcp/commit/f7432e7f8c4121ed2bf71b424fe17d03e59aed23))
* add tasks-complete-one and tasks-delete-one tools ([1ef6a99](https://github.com/parthmodi152/todoist-ai-mcp/commit/1ef6a99e2733226d85932b930a41dc9ff92d0ef9))
* add todoist base url to dev setup, plus doc improvements ([#62](https://github.com/parthmodi152/todoist-ai-mcp/issues/62)) ([e0e5a78](https://github.com/parthmodi152/todoist-ai-mcp/commit/e0e5a78d1358b82d5f2661a41ffe193015296154))
* Add user-info tool and upgrade Todoist API ([#82](https://github.com/parthmodi152/todoist-ai-mcp/issues/82)) ([b583fe1](https://github.com/parthmodi152/todoist-ai-mcp/commit/b583fe1045ea38fbe25dfa804df9ebe958f2881d))
* Add user's id to user_info tool ([#84](https://github.com/parthmodi152/todoist-ai-mcp/issues/84)) ([706ed8f](https://github.com/parthmodi152/todoist-ai-mcp/commit/706ed8fdfd11199808ca9824d4c66e8211d773c1))
* Adds completed tasks tool ([#8](https://github.com/parthmodi152/todoist-ai-mcp/issues/8)) ([d0ffad1](https://github.com/parthmodi152/todoist-ai-mcp/commit/d0ffad10a331c16f14b4d738ed7ac368fd8e44b4))
* allow configuring the base URL for the Todoist API ([332c11a](https://github.com/parthmodi152/todoist-ai-mcp/commit/332c11aec34ace9890fda36ef9356a7c417b22d1))
* allow configuring the base URL for the Todoist API ([c56b3a3](https://github.com/parthmodi152/todoist-ai-mcp/commit/c56b3a36207fb211188737f05f472ebcee6e7fc5))
* Consolidate MCP tools to reduce tool count ([#14](https://github.com/parthmodi152/todoist-ai-mcp/issues/14)) ([f0ccdf8](https://github.com/parthmodi152/todoist-ai-mcp/commit/f0ccdf8fd17f046fdb8d0938dea94163fd916a7c))
* Document the MCP setup better, including the remote endpoint ([#109](https://github.com/parthmodi152/todoist-ai-mcp/issues/109)) ([e1e69e2](https://github.com/parthmodi152/todoist-ai-mcp/commit/e1e69e27e91675775e7f4ea0bef709a17722131c))
* export comment tools ([#63](https://github.com/parthmodi152/todoist-ai-mcp/issues/63)) ([cec2999](https://github.com/parthmodi152/todoist-ai-mcp/commit/cec2999b8ca1f660f26b37cffb3803e863f60be0))
* Improve tool output UX with LLM-readable responses ([#49](https://github.com/parthmodi152/todoist-ai-mcp/issues/49)) ([7c25696](https://github.com/parthmodi152/todoist-ai-mcp/commit/7c25696926bbaee158482cbc75595e80959e1c12))
* parallelize add-tasks with per-task context ([#60](https://github.com/parthmodi152/todoist-ai-mcp/issues/60)) ([816d099](https://github.com/parthmodi152/todoist-ai-mcp/commit/816d099551974bad3e0663c1d77334b692aaa76a))
* Remove single update task and replace with multiple ([#47](https://github.com/parthmodi152/todoist-ai-mcp/issues/47)) ([8a9b7cf](https://github.com/parthmodi152/todoist-ai-mcp/commit/8a9b7cf119a405a2849ab95c437a344961790686))
* restructure management tools into specialized add/update tools ([#59](https://github.com/parthmodi152/todoist-ai-mcp/issues/59)) ([0c4dcf7](https://github.com/parthmodi152/todoist-ai-mcp/commit/0c4dcf7c4e420eadea15bf825599f4c3cd72cbfc))
* verb-first tool names, unify find-by-container into find-tasks ([#53](https://github.com/parthmodi152/todoist-ai-mcp/issues/53)) ([dbada71](https://github.com/parthmodi152/todoist-ai-mcp/commit/dbada719d98df4bb91a52a0a7af8afb6ad6f3fae))


### Bug Fixes

* add issues permission for release-please workflow ([0974fa4](https://github.com/parthmodi152/todoist-ai-mcp/commit/0974fa45aa8578eafd2e9e1355a997ee09dce391))
* convert project from CommonJS to ES modules to resolve MCP initialization ([#24](https://github.com/parthmodi152/todoist-ai-mcp/issues/24)) ([f817e04](https://github.com/parthmodi152/todoist-ai-mcp/commit/f817e045a711f90b4f74464a480dd1aa8f7e1027))
* correct bin field format in package.json for npx support ([#37](https://github.com/parthmodi152/todoist-ai-mcp/issues/37)) ([a50fa75](https://github.com/parthmodi152/todoist-ai-mcp/commit/a50fa75d737bc6f4503442830565c3d4a942c9af))
* correct bin path in package.json for npx support ([#39](https://github.com/parthmodi152/todoist-ai-mcp/issues/39)) ([816021d](https://github.com/parthmodi152/todoist-ai-mcp/commit/816021dc3572dd476818981388fac634794d7e21))
* fix priority levels ([#98](https://github.com/parthmodi152/todoist-ai-mcp/issues/98)) ([64db2ff](https://github.com/parthmodi152/todoist-ai-mcp/commit/64db2ff97f3ede0c5cff14d1c58f8fed63a9d742))
* format package.json for release ([94c3205](https://github.com/parthmodi152/todoist-ai-mcp/commit/94c3205b18362fb708fc2625b7df1c05b9844453))
* format package.json for release ([899ff1e](https://github.com/parthmodi152/todoist-ai-mcp/commit/899ff1e9af213e99385d37e498d90af118235aa4))
* Move express and morgan to dependencies for production HTTP server ([e63460d](https://github.com/parthmodi152/todoist-ai-mcp/commit/e63460d56cf54123264e8f2f30d03c6876914d84))
* resolve task move operations using correct Todoist API methods ([#22](https://github.com/parthmodi152/todoist-ai-mcp/issues/22)) ([3b8f509](https://github.com/parthmodi152/todoist-ai-mcp/commit/3b8f50943f517ae76b754923f7a8c5563880e9ba))
* Update package.json with `mcpName` ([#106](https://github.com/parthmodi152/todoist-ai-mcp/issues/106)) ([df19306](https://github.com/parthmodi152/todoist-ai-mcp/commit/df19306adb13ff6416a37e4b49a6d2e5ab5c459f))
* update release-please action to googleapis/release-please-action@v4 ([7fbb5fd](https://github.com/parthmodi152/todoist-ai-mcp/commit/7fbb5fdd3f435e68a9b2ba054247d29e82fcc465))
* Use --omit=dev instead of --only=production for npm ci ([59fe76b](https://github.com/parthmodi152/todoist-ai-mcp/commit/59fe76bc13ccc893d2ab51ed64317977ff06ca0f))


### Miscellaneous Chores

* Release 4.5.2 ([11df6f2](https://github.com/parthmodi152/todoist-ai-mcp/commit/11df6f2c03e31bffd02a6c4f1a5176158e434e05))

## [4.7.0](https://github.com/Doist/todoist-ai/compare/v4.6.1...v4.7.0) (2025-09-25)


### Features

* Document the MCP setup better, including the remote endpoint ([#109](https://github.com/Doist/todoist-ai/issues/109)) ([e1e69e2](https://github.com/Doist/todoist-ai/commit/e1e69e27e91675775e7f4ea0bef709a17722131c))

## [4.6.1](https://github.com/Doist/todoist-ai/compare/v4.6.0...v4.6.1) (2025-09-24)


### Bug Fixes

* Update package.json with `mcpName` ([#106](https://github.com/Doist/todoist-ai/issues/106)) ([df19306](https://github.com/Doist/todoist-ai/commit/df19306adb13ff6416a37e4b49a6d2e5ab5c459f))

## [4.6.0](https://github.com/Doist/todoist-ai/compare/v4.5.2...v4.6.0) (2025-09-24)


### Features

* add label support for add-tasks and update-tasks tools ([#103](https://github.com/Doist/todoist-ai/issues/103)) ([a4bc708](https://github.com/Doist/todoist-ai/commit/a4bc7085b5a63402970841e586ce985cab9022d0))

## [4.5.2](https://github.com/Doist/todoist-ai/compare/v4.5.1...v4.5.2) (2025-09-24)


### Miscellaneous Chores

* Release 4.5.2 ([11df6f2](https://github.com/Doist/todoist-ai/commit/11df6f2c03e31bffd02a6c4f1a5176158e434e05))

## [4.5.1](https://github.com/Doist/todoist-ai/compare/v4.5.0...v4.5.1) (2025-09-23)


### Bug Fixes

* fix priority levels ([#98](https://github.com/Doist/todoist-ai/issues/98)) ([64db2ff](https://github.com/Doist/todoist-ai/commit/64db2ff97f3ede0c5cff14d1c58f8fed63a9d742))

## [4.5.0](https://github.com/Doist/todoist-ai/compare/v4.4.0...v4.5.0) (2025-09-11)


### Features

* add task assignment management ([#81](https://github.com/Doist/todoist-ai/issues/81)) ([b9b1691](https://github.com/Doist/todoist-ai/commit/b9b16916dec8f18efc37631d77f97354fae2194a))

## [4.4.0](https://github.com/Doist/todoist-ai/compare/v4.3.0...v4.4.0) (2025-09-10)


### Features

* Add user's id to user_info tool ([#84](https://github.com/Doist/todoist-ai/issues/84)) ([706ed8f](https://github.com/Doist/todoist-ai/commit/706ed8fdfd11199808ca9824d4c66e8211d773c1))

## [4.3.0](https://github.com/Doist/todoist-ai/compare/v4.2.0...v4.3.0) (2025-09-09)


### Features

* Add user-info tool and upgrade Todoist API ([#82](https://github.com/Doist/todoist-ai/issues/82)) ([b583fe1](https://github.com/Doist/todoist-ai/commit/b583fe1045ea38fbe25dfa804df9ebe958f2881d))

## [4.2.0](https://github.com/Doist/todoist-ai/compare/v4.1.0...v4.2.0) (2025-08-29)


### Features

* Add support for filtering by label ([#71](https://github.com/Doist/todoist-ai/issues/71)) ([b608d32](https://github.com/Doist/todoist-ai/commit/b608d32f7636a175dc62ca388892e9aef0834712))

## [4.1.0](https://github.com/Doist/todoist-ai/compare/v4.0.0...v4.1.0) (2025-08-23)


### Features

* export comment tools ([#63](https://github.com/Doist/todoist-ai/issues/63)) ([cec2999](https://github.com/Doist/todoist-ai/commit/cec2999b8ca1f660f26b37cffb3803e863f60be0))

## [4.0.0](https://github.com/Doist/todoist-ai/compare/v3.0.0...v4.0.0) (2025-08-22)


### ⚠ BREAKING CHANGES

* restructure management tools into specialized add/update tools ([#59](https://github.com/Doist/todoist-ai/issues/59))

### Features

* add comment tools ([#58](https://github.com/Doist/todoist-ai/issues/58)) ([7d6ffca](https://github.com/Doist/todoist-ai/commit/7d6ffcacd326ef755aba691436d44d6b534f6b4b))
* add todoist base url to dev setup, plus doc improvements ([#62](https://github.com/Doist/todoist-ai/issues/62)) ([e0e5a78](https://github.com/Doist/todoist-ai/commit/e0e5a78d1358b82d5f2661a41ffe193015296154))
* parallelize add-tasks with per-task context ([#60](https://github.com/Doist/todoist-ai/issues/60)) ([816d099](https://github.com/Doist/todoist-ai/commit/816d099551974bad3e0663c1d77334b692aaa76a))
* restructure management tools into specialized add/update tools ([#59](https://github.com/Doist/todoist-ai/issues/59)) ([0c4dcf7](https://github.com/Doist/todoist-ai/commit/0c4dcf7c4e420eadea15bf825599f4c3cd72cbfc))

## [3.0.0](https://github.com/Doist/todoist-ai/compare/v2.2.2...v3.0.0) (2025-08-21)


### ⚠ BREAKING CHANGES

* verb-first tool names, unify find-by-container into find-tasks ([#53](https://github.com/Doist/todoist-ai/issues/53))
* Remove single update task and replace with multiple ([#47](https://github.com/Doist/todoist-ai/issues/47))

### Features

* Improve tool output UX with LLM-readable responses ([#49](https://github.com/Doist/todoist-ai/issues/49)) ([7c25696](https://github.com/Doist/todoist-ai/commit/7c25696926bbaee158482cbc75595e80959e1c12))
* Remove single update task and replace with multiple ([#47](https://github.com/Doist/todoist-ai/issues/47)) ([8a9b7cf](https://github.com/Doist/todoist-ai/commit/8a9b7cf119a405a2849ab95c437a344961790686))
* verb-first tool names, unify find-by-container into find-tasks ([#53](https://github.com/Doist/todoist-ai/issues/53)) ([dbada71](https://github.com/Doist/todoist-ai/commit/dbada719d98df4bb91a52a0a7af8afb6ad6f3fae))

## [2.2.2](https://github.com/Doist/todoist-ai/compare/v2.2.1...v2.2.2) (2025-08-16)


### Bug Fixes

* correct bin path in package.json for npx support ([#39](https://github.com/Doist/todoist-ai/issues/39)) ([816021d](https://github.com/Doist/todoist-ai/commit/816021dc3572dd476818981388fac634794d7e21))

## [2.2.1](https://github.com/Doist/todoist-ai/compare/v2.2.0...v2.2.1) (2025-08-16)


### Bug Fixes

* correct bin field format in package.json for npx support ([#37](https://github.com/Doist/todoist-ai/issues/37)) ([a50fa75](https://github.com/Doist/todoist-ai/commit/a50fa75d737bc6f4503442830565c3d4a942c9af))

## [2.2.0](https://github.com/Doist/todoist-ai/compare/v2.1.0...v2.2.0) (2025-08-16)


### Features

* Add npx support for MCP server usage ([#33](https://github.com/Doist/todoist-ai/issues/33)) ([5ed0c5f](https://github.com/Doist/todoist-ai/commit/5ed0c5f40615ab4afb61d0fcd9796c97e666b1f9))

## [2.1.0](https://github.com/Doist/todoist-ai/compare/v2.0.1...v2.1.0) (2025-08-15)


### Features

* add support for task duration when adding or updating tasks ([#28](https://github.com/Doist/todoist-ai/issues/28)) ([a0c6702](https://github.com/Doist/todoist-ai/commit/a0c6702dd446173c86675ecadd975506ce594c42))

## [2.0.1](https://github.com/Doist/todoist-ai/compare/v2.0.0...v2.0.1) (2025-08-14)


### Bug Fixes

* convert project from CommonJS to ES modules to resolve MCP initialization ([#24](https://github.com/Doist/todoist-ai/issues/24)) ([f817e04](https://github.com/Doist/todoist-ai/commit/f817e045a711f90b4f74464a480dd1aa8f7e1027))
* resolve task move operations using correct Todoist API methods ([#22](https://github.com/Doist/todoist-ai/issues/22)) ([3b8f509](https://github.com/Doist/todoist-ai/commit/3b8f50943f517ae76b754923f7a8c5563880e9ba))

## [2.0.0](https://github.com/Doist/todoist-ai/compare/v1.1.0...v2.0.0) (2025-08-13)


### ⚠ BREAKING CHANGES

* Consolidate MCP tools to reduce tool count ([#14](https://github.com/Doist/todoist-ai/issues/14))

### Features

* Consolidate MCP tools to reduce tool count ([#14](https://github.com/Doist/todoist-ai/issues/14)) ([f0ccdf8](https://github.com/Doist/todoist-ai/commit/f0ccdf8fd17f046fdb8d0938dea94163fd916a7c))


### Bug Fixes

* update release-please action to googleapis/release-please-action@v4 ([7fbb5fd](https://github.com/Doist/todoist-ai/commit/7fbb5fdd3f435e68a9b2ba054247d29e82fcc465))

## [1.1.0](https://github.com/Doist/todoist-ai/compare/v1.0.0...v1.1.0) (2025-08-13)


### Features

* Adds completed tasks tool ([#8](https://github.com/Doist/todoist-ai/issues/8)) ([d0ffad1](https://github.com/Doist/todoist-ai/commit/d0ffad10a331c16f14b4d738ed7ac368fd8e44b4))


### Bug Fixes

* add issues permission for release-please workflow ([0974fa4](https://github.com/Doist/todoist-ai/commit/0974fa45aa8578eafd2e9e1355a997ee09dce391))

## 1.0.0 (2025-08-12)


### Features

* add tasks-add-multiple and tasks-update-one tools ([f7432e7](https://github.com/Doist/todoist-ai/commit/f7432e7f8c4121ed2bf71b424fe17d03e59aed23))
* add tasks-complete-one and tasks-delete-one tools ([1ef6a99](https://github.com/Doist/todoist-ai/commit/1ef6a99e2733226d85932b930a41dc9ff92d0ef9))
* allow configuring the base URL for the Todoist API ([332c11a](https://github.com/Doist/todoist-ai/commit/332c11aec34ace9890fda36ef9356a7c417b22d1))
* allow configuring the base URL for the Todoist API ([c56b3a3](https://github.com/Doist/todoist-ai/commit/c56b3a36207fb211188737f05f472ebcee6e7fc5))

## [0.1.4](https://github.com/doist/todoist-ai/compare/v0.1.3...v0.1.4) (2025-01-XX)

### Features

* allow configuring the base URL for the Todoist API ([332c11a](https://github.com/doist/todoist-ai/commit/332c11a))

### Bug Fixes

* remove esm build, use single tsconfig for cjs ([24a1336](https://github.com/doist/todoist-ai/commit/24a1336))
* remove tools subpath, export tools from index.ts ([2e13489](https://github.com/doist/todoist-ai/commit/2e13489))

### Miscellaneous Chores

* rename tool files to match the tool name ([997780a](https://github.com/doist/todoist-ai/commit/997780a))

---

*Note: This changelog will be automatically maintained by [release-please](https://github.com/googleapis/release-please) starting from the next release.*
