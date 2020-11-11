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

yarn add koa-router

yarn add koa-bodyparser

yarn add mongoose dotenv

.env 생성

C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe

POST http://localhost:4000/api/posts
{
"title": "제목'
"body": "내용1',
"tags":["태그 1", "태그2"]
}

GET http://localhost:4000/api/posts

DELETE http://localhost:4000/api/posts/5cbc58de33O5623b98b37aa5

PATCH http://localhost:4000/api/posts/5cbc58de33O5623b98b37aa5
{
"title": "수정'
}
