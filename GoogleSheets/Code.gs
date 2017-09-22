function openDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
     .setWidth(1)
     .setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Message sent');
  return;
}
