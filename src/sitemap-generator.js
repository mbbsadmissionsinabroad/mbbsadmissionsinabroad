const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
//Import our routes
const router = require("../src/components/NavBar").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router())
  .build("https://mbbsadmissionsinabroad.com")
 //Save it wherever you want
  .save("../public/sitemap.xml")
  );
}

generateSitemap();