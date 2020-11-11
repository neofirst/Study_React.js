yarn init -y

yarn add koa

Prettier-Code formatter와 ESLint 확장 프로그램을 설치
yarn add --dev eslint
yarn run eslint --init

? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? CommonJS (require/exports)
? Which framework does your project use? None of these
? Where does your code run? Node (선택할 때 ispacel를 눌러서 Node를 활성화하세요. )
? What format do you want your config file to be in? 3S0N
Successfully created .eslintrc.json file in /Users/velopert/blog/blog-backend

.prettierrc 추가
{
"singleQuote": true,
"semi": true,
"useTabs": false,
"tabWidth": 2,
"trailingComma": "all",
"printWidth": 80
}

yarn add eslint-config-prettier

yarn add --dev nodemon
