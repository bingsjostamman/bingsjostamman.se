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
    // Allow single and double hyphens, numbers, and modifier-style names
    "custom-property-pattern": null,

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

    // Require class selectors to follow ITCSS + BEM pattern (e.g., c-block__element--modifier)
    "selector-class-pattern": "^(o|c|u|l|t|f|is|has)-[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",

    // Allow single-line comments (//) if needed
    "comment-empty-line-before": null,

    // Allow vendor prefixes if handled via PostCSS
    "property-no-vendor-prefix": null,

    // Restrict units to only those we use
    "unit-allowed-list": ["px", "em", "rem", "%", "deg", "s", "vh", "vw"],

    "color-no-invalid-hex": true,
    "max-nesting-depth": 3,
  },

  // Enable autofix when running CLI
  fix: true,
};
