import { ref, reactive } from "vue";

export function selectFunc(config: any, context: any) {
  const result = {
    "~": "ElSelect",
    "#": translateOptions(config._options || [], context),
  };
  //
  for (const k of Object.keys(config)) {
    if (k == "~" || k == "~component" || k.startsWith("_")) {
      continue;
    }
    result[k] = config[k];
  }

  //
  return result;
}

//t
function translateOptions(options, context) {
  if (typeof options == "function") {
    return translateOptions(options(context), context);
  } else if (Array.isArray(options)) {
    //build wrap array
    return parseOptionsArray(options);
  } else if (typeof options == "object") {
    //build wrap array
    return parseOptionsArray(
      options.value || [],
      options.labelField,
      options.valueField
    );
  } else {
    throw "Unsupported value option type:" + typeof options;
  }
}
//parse options array
function parseOptionsArray(
  options,
  labelField = "label",
  valueField = "value"
) {
  //
  let result = [];
  //
  for (let o of options) {
    result.push({
      "~": "el-option",
      //
      label: o[labelField],
      value: o[valueField],
    });
  }
  //
  return result;
}
