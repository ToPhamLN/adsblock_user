import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          semi: false,
          experimentalTernaries: false,
          singleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'none',
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: 'css',
          vueIndentScriptAndStyle: false,
          proseWrap: 'preserve',
          insertPragma: false,
          requirePragma: false,
          tabWidth: 2,
          useTabs: false,
          embeddedLanguageFormatting: 'auto',
          endOfLine: 'auto',
          printWidth: 80,
          jsxSingleQuote: true
        }
      ]
    }
  }
)
