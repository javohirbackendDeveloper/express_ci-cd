module.exports = [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    rules: {
      // Bu yerda kerakli ESLint qoidalarini qo'shishingiz mumkin
      "no-console": "warn",
      semi: ["error", "always"],
    },
  },
];
