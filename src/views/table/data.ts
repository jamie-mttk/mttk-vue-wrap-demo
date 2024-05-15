import { ref, reactive, toRaw, unref } from "vue";

export const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "Address 111",
  },
  {
    date: "2016-05-02",
    name: "Jack",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Who",
    address: "Who is here 3",
  },
  {
    date: "2016-05-01",
    name: "Yoyo",
    address: "Do not know 4",
  },
]);

//Just for demo purpose
function formatBirthday(sp) {
  if (sp?.row?.date) {
    return sp.row.date.replaceAll("-", "/");
  }
  return "No data";
}

export const tableConfig1 = {
  "~": "el-table",
  //props
  stripe: true,
  border: true,
  showHeade: true,
  data: tableData,
  //
  "#empty": "<b>Hello world</b>,there is no data!",
  "#": [
    {
      "~": "el-table-column",
      type: "selection",
    },
    {
      "~": "el-table-column",
      type: "index",
      label: "#",
    },
    {
      "~": "el-table-column",
      //
      prop: "date",
      sortable: true,
      width: "300px",
      //slots
      //Use a function to genreate output
      "#": formatBirthday,
      //Change caption
      "#header": "Custom  header <b>birthday</b>",
    },
    {
      "~": "el-table-column",
      //
      prop: "name",
      label: "Name",
      width: "300px",
      //
      //Please note it is a function to get value from parameter sp
      //The function return is vue wrapper format
      "#": function (sp) {
        return {
          //Use element tag to display name
          "~": "el-tag",
          type: "success",
          effect: "dark",
          "#": sp.row.name,
        };
      },
    },
    {
      "~": "el-table-column",
      //
      prop: "address",
      label: "Address",
      width: "auto",
      //empty:{type:'component',value:Search},
      "#": elTagFormatter("primary", "address"),
    },
  ],
};

function elTagFormatter(type, key) {
  return function (sp) {
    let address = sp.row[key];
    //This the HTML of el-tag
    return (
      '<span class="el-tag el-tag--' +
      type +
      ' el-tag--dark">' +
      '<span class="el-tag__content">' +
      address +
      "</span>" +
      "</span>"
    );
  };
}

export const tableConfig2 = {
  '~':tableFunc,
  columns: [
    {
      type: "selection",
    },
    {
      type: "index",
      label: "#",
    },
    {
      prop: "date",
      label: "Date",
      sortable: true,
      width: "200px",
    },
    {
      prop: "name",
      label: "Name",
      width: "300px",
      _formatter: elTagFormatter("primay", "name"),
    },
    {
      prop: "address",
      label: "Address",
      _formatter: elTagFormatter("success", "address"),
    },
  ],
};

export function tableFunc(config: any) {
  return {
    "~": "el-table",
    //Here some default props are set
    stripe: true,
    border: true,
    showHeade: true,
    //
    data: tableData,
    //
    '#empty':'Hello world,there is no data!',
    "#": buildColumns(config),
  };
}

function buildColumns(config: any) {
  let columns = [];
  //
  for (let c of config.columns || []) {
    columns.push(buildColumn(c));
  }
  //
  return columns;
}
function buildColumn(c: any) {
  const column = {
    '~': "el-table-column",
  };
  //props
  for (let k of Object.keys(c)) {
    if (k.startsWith("_")) {
      continue;
    }
    column[k] = c[k];
  }
  //If there is a formatter, try to handle this
  if (c._formatter) {
    column['#'] =  c._formatter;
  }
  //
  return column;
}
