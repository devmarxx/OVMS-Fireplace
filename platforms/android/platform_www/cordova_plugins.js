cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-webintent.WebIntent",
    "file": "plugins/cordova-webintent/www/webintent.js",
    "pluginId": "cordova-webintent",
    "clobbers": [
      "WebIntent"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-webintent": "2.0.0"
};
// BOTTOM OF METADATA
});