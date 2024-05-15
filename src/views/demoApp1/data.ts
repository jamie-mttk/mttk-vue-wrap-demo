//Reuse the form and table defined
import { formConfig2, formValue } from "@/views/form/data.ts";
import { tableConfig2, tableData } from "@/views/table/data.ts";

import pageFunc from "./pageFunc.ts";

//This is the cofniguration to define a demo page
export const configPage = {
  "~": pageFunc,
  criteriaConfig: formConfig2,
  criteriaData:formValue,
  tableConfig: tableConfig2,
  tableData,
  retrieveMethod: retrieveDataDemo, //Demo to retrive data from server,in a real project it can be a URL
};

//Get a random int
function randomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
//This is a demo only ,in real project the data is loaded from server
function retrieveDataDemo(criteria) {
  // alert('This is the criteria you input:' + JSON.stringify(criteria))
  let result = [];
  //generate demo data
  for (let i = 0; i < 10; i++) {
    let r = {};
    let day = randomInt(31);
    r.date = "2023-01-" + (day < 10 ? "0" + day : day);
    //r.name=criteria.name||'Who'+'-'+randomInt(100);
    r.name = (criteria.name || "Who") + "-" + randomInt(100);
    r.address = (criteria.address || "Where") + "-" + randomInt(1000);
    result.push(r);
  }
  //

  //
  return result;
}
