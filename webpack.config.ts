import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

type CLIValues = boolean | string;
type EnvValues = Record<string, CLIValues | Record<string, Env>>;
interface Env extends EnvValues {}
type Argv = Record<string, CLIValues>;
interface WebpackConfigurationGenerator {
  (env?: Env, argv?: Argv): Configuration;
}

const generateConfig: WebpackConfigurationGenerator = (env, argv) => {
  return {
    mode:
      argv && argv.mode === ("production" || "development" || "none")
        ? argv.mode
        : "production",
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CopyPlugin({
        patterns: [{ from: "./src/static", to: "" }],
      }),
    ],
    devServer: {
      port: 3000,
      compress: true,
      open: true,
      historyApiFallback: true,
    },
    devtool: "eval-source-map",
  };
};

export default generateConfig;
