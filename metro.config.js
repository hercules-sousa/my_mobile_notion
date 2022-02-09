const { getDefaultConfig } = require("metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push("svg");
defaultConfig.transformer.babelTransformerPath.push(
  require.resolve("react-native-svg-transformer")
);

module.exports = defaultConfig;
