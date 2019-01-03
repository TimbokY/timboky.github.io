{
  "name": "fmin",
  "version": "0.0.2",
  "description": "Unconstrained funcion minimization in Javascript",
  "keywords": [
    "fmin",
    "optimization",
    "Nelder-Mead",
    "Conjudate Gradient"
  ],
  "license": "BSD-3-Clause",
  "main": "build/fmin.js",
  "jsnext:main": "index",
  "homepage": "https://github.com/benfred/fmin",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/benfred/fmin.git"
  },
  "jshintConfig": {
    "esnext": true
  },
  "scripts": {
    "pretest": "rm -rf build && mkdir build && json2module package.json > build/package.js && rollup -f umd -n fmin -o build/fmin.js -- index.js && rollup -f umd -n fmin_vis -o build/fmin_vis.js -- index_vis.js",
    "test": "jshint src/*.js src/visualizations/*.js && tape 'test/**/*-test.js'",
    "prepublish": "npm run test && uglifyjs build/fmin.js -c -m -o build/fmin.min.js",
    "postpublish": "zip -j build/fmin.zip -- LICENSE README.md build/fmin.js build/fmin.min.js"
  },
  "devDependencies": {
    "contour_plot": "0.0.1",
    "json2module": "0.0",
    "rollup": "0.25",
    "tape": "4",
    "uglify-js": "2",
    "jshint": "^2.8.0"
  },
  "bugs": {
    "url": "https://github.com/benfred/fmin/issues"
  },
  "directories": {
    "example": "examples",
    "test": "test"
  },
  "dependencies": {
    "contour_plot": "^0.0.1",
    "json2module": "^0.0.3",
    "rollup": "^0.25.8",
    "tape": "^4.5.1",
    "uglify-js