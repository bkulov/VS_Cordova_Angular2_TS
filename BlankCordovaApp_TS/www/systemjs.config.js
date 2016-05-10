/**
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function (global) {

	var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

	//map tells the System loader where to look for things
	var map = {
		'app': '', // 'dist',
		'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
		'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api' // get latest
	};

	//packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app': { main: 'scripts/bootstrap.ts', defaultExtension: 'ts' },
		'rxjs': { defaultExtension: 'js' },
		'angular2-in-memory-web-api': { defaultExtension: 'js' },
	};

	// remove those not needed
	var packageNames = [
		'@angular/common',
		'@angular/compiler',
		'@angular/core',
		'@angular/http',
		'@angular/platform-browser',
		'@angular/platform-browser-dynamic',
		'@angular/router',
		'@angular/router-deprecated',
		'@angular/upgrade',
	];

	// add map entries for angular packages in the form '@angular/common': 'https://npmcdn.com/@angular/common@0.0.0-3?main=browser'
	packageNames.forEach(function (pkgName) {
		map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
	});

	// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
	packageNames.forEach(function (pkgName) {
		packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
	});

	var config = {
		transpiler: 'typescript',
		typescriptOptions: {
			emitDecoratorMetadata: true
		},
		map: map,
		packages: packages
	}

	// filterSystemConfig - index.html's chance to modify config before we register it.
	if (global.filterSystemConfig) { global.filterSystemConfig(config); }

	System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/