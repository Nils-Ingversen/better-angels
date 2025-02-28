const path = require("path");

module.exports = {
    plugins: [
        require("postcss-short")(/* pluginOptions */),
        require("postcss-extend-rule")(/* pluginOptions */),
        require("postcss-easings")(/* pluginOptions */),
        require("postcss-preset-env")(/* pluginOptions */),
        require("postcss-responsive-type")(/* pluginOptions */),
        require("postcss-for")(/* pluginOptions */),
        require("postcss-nested")(/* pluginOptions */),
        require("postcss-import")(/* pluginOptions */),
        require("postcss-merge-queries")(/* pluginOptions */),
        require("postcss-pxtorem")(/* pluginOptions */),
        require("@csstools/postcss-global-data")({
            files: [
                path.resolve(__dirname, "src/assets/styles/base/media.css"),
            ],
        }),
        require("postcss-custom-media")(/* pluginOptions */),
    ],
};
