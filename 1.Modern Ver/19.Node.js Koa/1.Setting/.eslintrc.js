module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "globals":{
        "Atomics":"readonly",
        "SharedArrayBuffer":"readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars":"warn",
        "no-console":"off"
    }
};
