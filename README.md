# Eclipse Api RESTful API
Source files for the API should be placed in __src__ folder.

## Links

- [SwaggerUI](https://eclipsefdn.github.io/api.eclipse.org-docs/swagger-ui/)
- OpenAPI Raw Files: [JSON](https://eclipsefdn.github.io/api.eclipse.org-docs/openapi.json) [YAML](https://eclipsefdn.github.io/api.eclipse.org-docs/openapi.yaml)

**Warning:** All above links are updated only after Travis CI finishes deployment

## Getting started
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### `npm start`
Starts the development server.

#### `npm run build`
Bundles the spec and prepares web_deploy folder with static assets.

#### `npm test`
Validates the spec.

#### `npm run gh-pages`
Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [eclipsefdn/api.eclipse.org-docs](https://github.com/eclipsefdn/api.eclipse.org-docs) repository
2. Clone repository: `git clone https://github.com/[your_github_username]/api.eclipse.org-docs.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -m 'Add some feature' -s`
5. Push feature branch: `git push origin my-new-feature`
6. Submit a pull request

### Declared Project Licenses

This program and the accompanying materials are made available under the terms
of the Eclipse Public License v. 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

SPDX-License-Identifier: EPL-2.0

## Bugs and feature requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/eclipsefdn/api.eclipse.org-docs/issues/new).

## Author

**Christopher Guindon (Eclipse Foundation)**

- <https://twitter.com/chrisguindon>
- <https://github.com/chrisguindon>

**Eric Poirier (Eclipse Foundation)**

- <https://twitter.com/ericpoir>
- <https://github.com/ericpoirier>

## Trademarks

* Eclipse® is a Trademark of the Eclipse Foundation, Inc.
* Eclipse Foundation is a Trademark of the Eclipse Foundation, Inc.

## Copyright and license

Copyright 2018 the [Eclipse Foundation, Inc.](https://www.eclipse.org) and the [api.eclipse.org-docs authors](https://github.com/eclipsefdn/api.eclipse.org-docs/graphs/contributors). Code released under the [Eclipse Public License Version 2.0 (EPL-2.0)](https://github.com/eclipsefdn/api.eclipse.org-docs/LICENSE).