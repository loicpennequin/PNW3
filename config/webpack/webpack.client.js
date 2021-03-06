const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = env => ({
    target: 'web',
    entry: {
        app:
            env.NODE_ENV === 'production'
                ? path.resolve(__dirname, '../../src/client/index.js')
                : [
                      // 'webpack-hot-middleware/client?path=http://localhost:8001/__webpack_hmr',
                      path.resolve(__dirname, '../../src/client/index.js')
                  ],
        styleguide:  [
              // 'webpack-hot-middleware/client?path=http://localhost:8001/__webpack_hmr',
              path.resolve(__dirname, './../../src/client/style_guide')
          ],
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                exclude: /app.sass/,
                use: [
                    // env.NODE_ENV !== 'production' && 'css-hot-loader',
                    env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // sourceMap: env.NODE_ENV !== 'production',
                            modules: true,
                            localIdentName: '[name]-[local]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: require(path.join(
                                __dirname,
                                '../../src/client/styles/settings/index.js'
                            ))
                        }
                    }
                ].filter(loader => loader !== false)
            },
            //GLobal Styles
            {
                test: /app.sass/,
                use: [
                    env.NODE_ENV !== 'production' && 'css-hot-loader',
                    env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ].filter(loader => loader !== false)
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, '../../public/assets')
    },
    plugins: [
        new webpack.DefinePlugin({
            __IS_BROWSER__: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].0[id].css",
        }),
        new ManifestPlugin({
            seed: {
                permissions: ['cookies', '*://localhost:800/*']
            }
        }),
        env.NODE_ENV === 'production' &&
            new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        env.NODE_ENV === 'production' && new CompressionPlugin()
    ].filter(plugin => plugin !== false),
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            env.NODE_ENV === 'production' &&
                new UglifyWebpackPlugin({
                    uglifyOptions: {
                        compress: {
                            collapse_vars: false
                        }
                    }
                })
        ].filter(plugin => plugin !== false)
    }
});
