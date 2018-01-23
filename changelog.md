# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

* Templates are now generated into their own .js file, `angular-lte.templates.js`. They are using AngularJS' $templatecache, and can be overridden.

## [0.3.0] - 2018-01-22

### Fixed

* Fixed compile error after switching to TypeScript 2.4.

### Changed

* Renamed `lte-treeview-toggle` to `lte-treeview-title`.

## [0.2.0] - 2017-08-09

### Added

* `<lte-box />` now supports `on-toggle-collapsed` callback.

### Fixed

* `lte-box-footer` now works with `ng-if`.
* `lte-treeview-toggle` can now be used without a menu sibling.

## [0.1.0] - 2017-06-30

### Added

* Initial changelog added.
