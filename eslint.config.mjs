import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
        rules: {
            "indent": ["error", 4],
            "prefer-const": "error",
            "no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
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
