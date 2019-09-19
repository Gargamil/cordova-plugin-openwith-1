const PLUGIN_ID = "cordova-plugin-openwith";

module.exports = function (context) {
  var child_process = require('child_process');
  var deferral = require('q').defer();

  console.log('Installing "' + PLUGIN_ID + '" dependencies');
  child_process.exec('npm install --production', {cwd: __dirname}, function (error) {
    if (error !== null) {
      console.log('exec error: ' + error);
      deferral.reject('npm installation failed');
    }
    deferral.resolve();
  });

  return deferral.promise;
};
