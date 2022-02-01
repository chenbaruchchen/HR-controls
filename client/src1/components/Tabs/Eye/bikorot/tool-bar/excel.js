const ExcelJS = require('exceljs');

export default function excel(files) {

    const workbook = new ExcelJS.Workbook();

let indexSheet=0
    files.forEach(file => {

        ///create sheet for each shelon
        let  name =file.meta.name?file.meta.name:'name'
        const sheet = workbook.addWorksheet(name+" "+indexSheet);
        indexSheet++

        
      file.ans.forEach(ans => {
        // sheet.addRow(["quatsion", ans?ans.details:"null", ans?ans.found:'null']);
 
        sheet.addRow(["quatsion"]);
      });
      console.log(sheet)
    });
  save("name",workbook)

  
}




function save(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}