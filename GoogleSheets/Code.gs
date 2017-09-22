function openDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
     .setWidth(1)
     .setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Message sent');
  return;
}

function send2uBit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var log = ss.getSheetByName("DATA");
  var msg = log.getRange(2,1).getValue();
  Logger.log(msg);
  return (msg);
}
