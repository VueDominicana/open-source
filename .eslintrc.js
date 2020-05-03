module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: "error",
    "prefer-const": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    curly: ["error", "all"],
    "no-return-assign": 0,
    "no-undef": 0,
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "space-infix-ops": "error",
    "no-multi-spaces": ["error", { exceptions: { Property: false } }],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": 0
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
