import { saveAs } from "file-saver";
const ExcelJS = require('exceljs');

export default function excel(files) {
console.log(files)
    const workbook = new ExcelJS.Workbook();

let indexSheet=0
    files.forEach(file => {

        ///create sheet for each shelon
        let  name =file.meta.name?file.meta.name:'name'
        const sheet = workbook.addWorksheet(name+" "+indexSheet);
        indexSheet++

        
      file.ans.forEach(ans => {
        sheet.addRow(["quatsion", ans?ans.details:"null", ans?ans.found:'null']);
 
        // sheet.addRow(["quatsion"]);
      });
       
    });

    saveFile("ביקורת", workbook);


  async function saveFile(fileName, workbook) {
    const xls64 = await workbook.xlsx.writeBuffer({ base64: true });
    saveAs(
      new Blob([xls64], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }),
      fileName
    );
  }
  
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



// import Excel from "exceljs";
// import { saveAs } from "file-saver";

// export default function App() {
//   return <button onClick={file}>click</button>;
// }
// function file() {
//   const workbook = new Excel.Workbook();

//   const worksheet = workbook.addWorksheet("People");
//   worksheet.columns = [
//     { header: "Id", key: "id", width: 10 },
//     { header: "Name", key: "name", width: 10 },
//     { header: "D.O.B.", key: "DOB", width: 30 }
//   ];
//   worksheet.addRow([10086, "Ken1", "YYYY-MM-DD"]);
//   worksheet.addRow([10087, "Ken2", "YYYY-MM-DD"]);
//   worksheet.addRow([10088, "Ken3", "YYYY-MM-DD"]);


    // saveFile("fileNameXXX", workbook);


  // async function saveFile(fileName, workbook) {
  //   const xls64 = await workbook.xlsx.writeBuffer({ base64: true });
  //   saveAs(
  //     new Blob([xls64], {
  //       type:
  //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  //     }),
  //     fileName
  //   );
  // }
// }
