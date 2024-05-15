//
export default function pageFunc(config) {
  //
  function onSearch() {
    //First we could validate form here,ignored
    //Call configed function to retrieve data
    let result = config.retrieveMethod(config.criteriaData);
    config.tableData.value = result;
  }
  //
  return {
    "~": "el-row",
    //
    gutter: 10,
    justify: "start",
    align: "top",
    //
    "#": [
      { "~": "el-col", span: 22, "#": config.criteriaConfig },
      {
        "~": "el-col",
        span: 2,
        "#": {
          "~": "ElButton",
          type: "success",
          "#": "Search",
          "@click": onSearch,
        },
      },
      {
        "~": "el-col",
        span: 24,
        "#": config.tableConfig,
      },
    ],
  };
}
