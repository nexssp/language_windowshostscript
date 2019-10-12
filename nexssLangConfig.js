module.exports = {
  description: "Windows Scripting Host",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "WScript.exe",
  extension: ".wsf",
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install ahk <package>",
      darwin: "nexss install ahk <package>",
      linux: "nexss install ahk <package>"
    }
  },
  url: ""
};
