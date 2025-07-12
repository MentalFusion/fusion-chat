import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
        rules: {
            "indent": ["error", 4, { "SwitchCase": 1 }],
            "prefer-const": "error",
            "no-unused-vars": "off", // prefer using @typescript-eslint/no-unused-vars
            "quotes": ["error", "double", { "avoidEscape": true }],
            "semi": ["error", "always"],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
                    argsIgnorePattern: "^_",
                },
            ],
        },
        ignorePatterns: [
            "node_modules/",
            "dist/",
            "build/",
            ".next/",
            "coverage/",
            "public/",
        ],
    }),
];

export default eslintConfig;
