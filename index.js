#!/usr/bin/env node

var semver = require("semver")

process.stdin.resume()
process.stdin.setEncoding('utf8')

var d = ""
process.stdin.on('data', function (data) {
  d += data
})

process.stdin.on('end', function () {
  var json = JSON.parse(d)

  Object.keys(json).forEach(function (pkg) {
    if (json[pkg].wanted !== json[pkg].latest)
      return console.log("Hey Robert, there is a new latest version of " +
        pkg + ", v" + json[pkg].latest)
  })
})
