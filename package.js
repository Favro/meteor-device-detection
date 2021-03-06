Package.describe({
  name: "mystor:device-detection",
  summary: "Client-Side Device Type Detection & Template Switching with Optional Meteor-Router Support",
  version: "0.2.0",
  git: "https://github.com/mystor/meteor-device-detection.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.10.2');

  api.use(['meteor', 'underscore', 'deps', 'session', 'templating', 'ui'], 'client');

  api.addFiles(['device_detection.js', 'device_helpers.js'], 'client');
});

