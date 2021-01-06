1. yarn add node-sass

2. vscode git commit

3. yarn eject

4. config/webpack.config 수정

4.1 공통 style 부분 분리 style/utils.scss
{
test: sassRegex,
exclude: sassModuleRegex,
use: getStyleLoaders(
{
importLoaders: 2,
sourceMap: isEnvProduction && shouldUseSourceMap,
}).concat({
loader: require.resolve('sass-loader'),
options: {
includePaths: [paths.appSrc + '/styles'],
sourceMap: isEnvProduction && shouldUseSourceMap,
data:`@import 'utils';`
}
}),
// Don't consider CSS imports dead code even if the
// containing package claims to have no side effects.
// Remove this when webpack adds a warning or an error for this.
// See https://github.com/webpack/webpack/issues/6571
sideEffects: true,
},

4.2 node library 참고
node library style
yarn add open-color include-media
{
test: sassRegex,
exclude: sassModuleRegex,
use: getStyleLoaders(
{
importLoaders: 2,
sourceMap: isEnvProduction && shouldUseSourceMap,
}).concat({
loader: require.resolve('sass-loader'),
options:{ prependData:`@import 'utils';`,
sassOptions: {
includePaths: [paths.appSrc + '/styles'],
sourceMap: isEnvProduction && shouldUseSourceMap,
}
}
}),
// Don't consider CSS imports dead code even if the
// containing package claims to have no side effects.
// Remove this when webpack adds a warning or an error for this.
// See https://github.com/webpack/webpack/issues/6571
sideEffects: true,
},
