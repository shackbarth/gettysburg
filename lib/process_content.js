(function () {

  var _ = require("underscore"),
    async = require('async'),
    fs = require('fs'),
    marked = require("marked"),
    path = require('path'),
    contentFiles = fs.readdirSync(path.join(__dirname, "../content")),
    imageFiles = fs.readdirSync(path.join(__dirname, "../public/images")),
    stylesheets = fs.readdirSync(path.join(__dirname, "../public/stylesheets"));

  var loadContentFile = function (filename, done) {
    if (!_.contains([".markdown", ".md"], path.extname(filename))) {
      done(); // don't serve non-markdown content files
      return;
    }
    fs.readFile(path.join(__dirname, "../content", filename), "utf8", function (err, data) {
      if (err) {
        return done(err);
      }
      filename = encodeURIComponent(filename);
      var dataLines = data.split("\n");
      var basename = path.basename(filename, path.extname(filename));
      var imageName = _.find(imageFiles, function (imageFile) {
        return path.basename(imageFile, path.extname(imageFile)) === basename;
      });
      var stylesheetName = _.find(stylesheets, function (stylesheet) {
        return path.basename(stylesheet, path.extname(stylesheet)) === basename;
      });
      var stylesheetPath = stylesheetName &&
        "/stylesheets/" + path.basename(stylesheetName, path.extname(stylesheetName)) + ".css";

      done(null, {
        markdown: marked(dataLines.splice(2).join("\n")),
        file: basename,
        path: basename === "index" ? "" : basename,
        image: imageName ? "../images/" + imageName : "http://placekitten.com/g/1024/768",
        stylesheet: stylesheetPath,
        title: dataLines[0].replace(/^[^a-zA-Z]+/, ""), // delete leading non-alpha characters
        subtitle: dataLines[1].replace(/^[^a-zA-Z]+/, "")
      });
    });
  };

  exports.processContent = function (callback) {
    async.map(contentFiles, loadContentFile, callback);
  };
}());
