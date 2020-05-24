module.exports = {
    "postcss": [
		{
			name: 'rucksack-css',
			options: {
				// deny: ['text']
			}
		},
		{
			name: 'cssnano',
			options: {}
		}
    ],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "manual"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": true,
        "useBabel": false,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false,
            "providePlugin": {
                // Automtically detect jQuery and $ as free var in modules
                // and inject the jquery library
                // This is required by many jquery plugins
                // jQuery: "jquery/dist/jquery",
                // $: "jquery/dist/jquery"
            }
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "devPath": "./dev/",
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "handlebars",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96,
        192,
        288,
        384
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "staticPrefix": "static/"
};
