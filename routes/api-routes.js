const tablesData = require("../tablesData.js");


// API GET Requests & POST Requests
// =============================================================
// console.log(JSON.stringify(tablesData));

module.exports = function(app) {
  // console.log(JSON.stringify(tablesData));
  app.get("/api/tables", function(req, res) {
    res.json(tablesData.confirmedTables);
  });
//
  app.get("/api/waitlist", function(req, res) {
    res.json(tablesData.waitlistTable);
  });

  app.post("/api/tables", function(req, res) {
    if (tablesData.confirmedTables.length < 5) {

      tablesData.confirmedTables.push(res.body);
      console.log(JSON.stringify(res.body));
      res.json(true);
    } else {
      tablesData.waitlistTable.push(res.body);
    }
  });
}
