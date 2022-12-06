const { PDFNet } = require('@pdftron/pdfnet-node');
const fs = require('fs');

(async () => {
  await PDFNet.initialize('demo:1644909533056:7b012f600300000000884145f8898e51bd1ce889fe2392e42aed9c5c6c')
  const files = fs.readdirSync('./pdfsToLinearize/');

  for(const file of files){
    let doc = await PDFNet.PDFDoc.createFromFilePath(`./pdfsToLinearize/${file}`)
  
    doc.save('./pdfsLinearized/' + file, PDFNet.SDFDoc.SaveOptions.e_linearized);
  
    doc.destroy();
  }

})()
