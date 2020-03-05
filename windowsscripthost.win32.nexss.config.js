let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Windows Scripting Host";
languageConfig.description = "Windows Scripting Host";
languageConfig.founders = ["Microsoft"];
languageConfig.developers = ["Microsoft"];
languageConfig.years = ["1996"];
languageConfig.url = "";
languageConfig.extensions = [".wsf"];
languageConfig.compilers = {
  WScript: {
    // install: "scoop install php",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "WScript.exe",
    args: "/nologo <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.windowsscripthost.errors");

module.exports = languageConfig;
