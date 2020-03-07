'use strict'

const {src, dest, watch, serial, parallel } = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  cssNano = require('gulp-cssnano'),
  autoprefixer = require('gulp-autoprefixer');

