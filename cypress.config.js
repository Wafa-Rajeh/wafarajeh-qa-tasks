const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
screenshotsFolder:"MyscreenshotsFolder",
trashAssetsBeforeRuns:true,
video:false,  
videosFolder:"MyVideosFolder"  ,
reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"

  },}
});
