module.exports = {
  // Extend Stylistic and Standard config
  extends: ["stylelint-config-standard", "@stylistic/stylelint-config"],

  // Specify file types to lint
  // You can adjust this if you want to include component CSS, prebuilt CSS, etc.
  ignoreFiles: [
    "src/css/debug.css",
    "src/css/entry.css",
    "node_modules/**",
    "processed/**", // optional: skip processed folder if needed
  ],

  // Optional plugins if you need them
  plugins: [],

  // Customize rules if desired
  rules: {
    // Ensure 2-space indentation
    indentation: 2,

    // Force lowercase for hex colors
    "color-hex-case": "lower",

    // Enforce empty line before each new block except first in file
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],

    // Disallow duplicate properties
    "declaration-block-no-duplicate-properties": true,

    // Require a newline after each block for readability
    "block-closing-brace-newline-after": "always",

    // Require lowercase for properties
    "property-case": "lower",

    // Require class selectors to follow ITCSS pattern (e.g., objects/components/utilities)
    "selector-class-pattern": "^(o|c|u|l|t|f|is|has)-[a-z0-9\\-]+$",

    // Allow single-line comments (//) if needed
    "comment-empty-line-before": null,

    // Allow vendor prefixes if handled via PostCSS
    "property-no-vendor-prefix": null,

    // Optional: restrict units to only those you actually use
    "unit-whitelist": ["px", "em", "rem", "%", "deg", "s", "vh", "vw"],

    "string-quotes": "double",
    "color-no-invalid-hex": true,
    "max-nesting-depth": 3,
    "unit-whitelist": ["em", "rem", "%", "px", "deg", "s"],
    // Allow using single-line comments (//) if needed
    "comment-empty-line-before": null,
    // Disable vendor-prefix warnings if you handle them via PostCSS
    "property-no-vendor-prefix": null,
    // ...add any stylistic rules you want
  },

  // Enable autofix when running CLI
  fix: true,
};
