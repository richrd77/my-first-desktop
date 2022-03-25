This is the simple desktop app created with Angular and Electron

# Electron

## What is Electron?
[Electron](https://www.electronjs.org/) is a framework used to create cross platform desktop apps. Meaning write code only once (in HTML, CSS & JavaScript) and can be used for Mac OS, Windows & Unix systems.

## Why Electron?
we have lot of technologies (like Java, C#, C++) to create desktop apps to support all OS, but we have to maintain seperate seperate code for different platforms because the supporting files would be different and in some cases even the syntax might be different for Windows and Mac. With Electron we can have only one code base and build the same code for different platforms.

## How Electron works?
Electron basically uses chromium (yes the same one which is also present in the browsers) to run the code and also support with NodeJs to access system resources.

In this code base, we have used angular framework for the GUI component in order to have better UI experience, we can use any UI framework available not just angular and finally we have to link the UI framework to the Electron so that it would be packed and shipped as .exe file.

### steps followed
1. created new angular project by running command ```ng new your-project-name``` you could use routing if your are loading different view or have more complex view.
2. install Electron by running command ```npm install --save-dev electron``` note that Electron is only a Dev dependency meaning when we build the code in production mode we do not require that package.
3. electron and angular is linked via package.json file, in package.json file electron requires "main" property to determine the starting point, this can be done by putting ```"main": "main-electron.js"``` please note that .js file name can be anything.
4. creating main-electron.js file, the code of this file is pretty standard i got it off the internet and it contains all the configuration for the main window.
5. now when we run electron app we want it to first run angular and then electron, this can be achived by adding a command in package.json file like ```"ele": "ng build && electron ."``` under "scripts" property (please note "ele" can be any valid key, "ng build" is a valid command to run angular app and "electron ." is a valid command to run electron app).
6. now in order to run the electron app just type ```npm run ele``` this will open up the new desktop window.