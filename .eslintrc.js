module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["airbnb", "prettier"],
    overrides: [
      {
        files: ["*.jsx", "*.js"],
      },
    ],
    rules: {
      "import/prefer-default-export": "off",
      "no-console": "off",
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  };