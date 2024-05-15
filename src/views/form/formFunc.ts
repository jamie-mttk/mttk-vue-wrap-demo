//
export function formFunc(formValue: any) {
  return function (config: any) {
    return {
      "~": "ElForm",
      //
      labelPosition: "right",
      labelWidth: 60,
      size: "default",
      disabled: false,
      model: formValue,
      inline: true,
      //
      "#": buildItems(formValue, config),
    };
  };
}

function buildItems(formValue: any, config: any) {
  let items = [];
  //
  for (let c of config.items || []) {
    items.push(buildItem(formValue, c));
  }
  //
  return items;
}
function buildItem(formValue: any, c: any) {
  if (!c._prop) {
    throw "_prop is missing in config:" + JSON.stringify(c);
  }

  //component(such as input/select,etc.) config
  let v = {
    "~": c["~"] || c["~component"] || "ElInput",
    //Use modelValuePath config modelValue
    '~modelValue': formValue,
    '~modelValuePath': c._prop,
    //
    ...componentProps(c),
  };
  //
  let item = {
    "~": "el-form-item",
    ...formItemProps(c),
    "#": v,
  };

  //
  return item;
}

//props of component(ElInput,ElSelect...)
function componentProps(c) {
  const result = {};
  for (const key of Object.keys(c)) {
    if (key == "~" || key == "~component"){
      continue;
    }
    if(key.startsWith("~")||key.startsWith("_")||key.startsWith("@")||key.startsWith("^")||key.startsWith("#")) {
      continue;
    }
    result[key] = c[key];
  }
  return result;
}

function formItemProps(c) {
  const result = {};
  for (const key of Object.keys(c)) {
    if (key == "~" || key == "~component"){
      continue;
    }
    if(key.startsWith("~")||key.startsWith("_")||key.startsWith("@")||key.startsWith("^")||key.startsWith("#")) {
      result[key.substring(1)] = c[key];
    }
    
  }
  return result;
}
