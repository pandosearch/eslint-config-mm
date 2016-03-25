# eslint-config-mm

Eslint rules for Matchminds projects

## Usage

1. Install this module as a devDependency:
    ```shell
    npm install --save-dev eslint-config-mm
    ```

2. Add a `.eslintrc` file to your project root similar to this:
    ```json
    {
      "root": true,
      "extends": ["eslint-config-mm"]
    }
    ```

3. Optionally add one-off rule deviations to your local `.eslintrc` file.

## Flavours

Linting rules are available in ES5 and ES6 flavours. ES6 is the default.

Using a different flavour can be done by extending from a specific file in this module. For example:

```json
{
  "root": true,
  "extends": ["eslint-config-mm/es5"]
}
```
