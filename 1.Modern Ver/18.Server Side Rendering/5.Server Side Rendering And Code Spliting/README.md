yarn add react-router-dom

git commit 작업 후 yarn eject

index.server.js

서버 사이드 렌더링 전용 웹팩 환경 설정
config/paths.js
module.exports = {
dotenv: resolveApp('.env'),
appPath: resolveApp('.'),
appBuild: resolveApp('build'),
appPublic: resolveApp('public'),
appHtml: resolveApp('public/index.html'),
appIndexJs: resolveModule(resolveApp, 'src/index'),
appPackageJson: resolveApp('package.json'),
appSrc: resolveApp('src'),
appTsConfig: resolveApp('tsconfig.json'),
appJsConfig: resolveApp('jsconfig.json'),
yarnLockFile: resolveApp('yarn.lock'),
testsSetup: resolveModule(resolveApp, 'src/setupTests'),
proxySetup: resolveApp('src/setupProxy.js'),
appNodeModules: resolveApp('node_modules'),
publicUrlOrPath,
//ssr추가
ssrIndexJs:resolveApp('src/index.server.js'),
ssrBuild:resolveApp('dist')
};

webpack.config.server.js

node module 제외하고 번들링
yarn add webpack-node-externals

빌드 스크립트
build.server.js

스크립트 추가
"scripts": {
"start": "node scripts/start.js",
"build": "node scripts/build.js",
"test": "node scripts/test.js",
"start:server": "node dist/server.js",
"build:server": "node scripts/build.server.js"
},

yarn add express

yarn build
-build 폴더 생성, css 처리 위해 asset-manifest.json 참조

yarn add redux react-redux redux-thunk axios

서버 사이드 렌더링 시 useEffect나 componentDidmount 설정 작업 호출이 안됨

클래스형 컴포넌트의 constructor 또는 render 자체에서 처리
요청 종료 시 까지 대기 후 다시 렌더링
이로 인해 PreloadContext 구현
lib/PreloadContext.js

yarn add redux-saga

lib/PreloadContext.js
UserContainer.js참고

yarn add @loadable/component @loadable/server @loadable/webpack-plugin @loadable/babel-plugin

package.json

"babel": {
"presets": [
"react-app"
],
"plugins": [
"@loadable/babel-plugin"
]
}

webpack.config.js
const LoadablePlugin = require('@loadable/webpack-plugin');

build/loadable-stats.json 내부의 chunk 파일 확인 가능

index.server.js 확인

loadableReady

- loadable components 사용 시 모든 스크립트 로딩 후 렌더링 처리

hydrate
-render 함수 대시 사용
