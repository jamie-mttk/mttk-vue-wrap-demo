import { ref, reactive,toRaw,unref } from "vue";

export const tableValue = ref([
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
function formatBirthday(d)   {
  if (d.slotValue?.row?.date) {
    return d.slotValue.row.date.replaceAll("-", "/");
  }
  return "No data";
}

export const tableConfig1 = {
  sys: {
    component: "el-table",
  },
  props: {
    stripe: true,
    border: true,
    showHeade: true,
    //
    data: tableValue,
  },
  slots: {
    empty: { type: "html", value: "<b>Hello world</b>,there is no data!" },
    default: {
      type: "wrap",
      value: [
        {
          sys: {
            component: "el-table-column",
          },
          props: {
            type: "selection",
          },
        },
        {
          sys: {
            component: "el-table-column",
          },
          props: {
            type: "index",
            label: "#",
          },
        },
        {
          sys: {
            component: "el-table-column",
          },
          props: {
            prop: "date",
            sortable: true,
            width: "300px",
          },
          slots: {
            //Use a funciton to genreate output
            default: { type: "function", value: formatBirthday },
            //Change caption
            header: { type: "html", value: "Custom  header <b>birthday</b>" },
          },
        },
        {
          sys: {
            component: "el-table-column",
          },
          props: {
            prop: "name",
            label: "Name",
            width: "300px",
          },
          slots: {
            //Please note it is a function to get value from parameter sp
            //The function return is vue wrapper format
            //type:"wrap" can not be ignored, otherwise the funciton return will be considered as HTML[Refer to Address column].
            default: {
              type: "wrap",
              value: function (sp) {
                return {
                  //Use element tag to display name
                  sys: {
                    component: "el-tag",
                  },
                  props: {
                    type: "success",
                    effect: "dark",
                  },
                  slots: {
                    default: sp.slotValue.row.name,
                  },
                };
              },
            },
          },
        },
        {
          sys: {
            component: "el-table-column",
          },
          props: {
            //
            prop: "address",
            label: "Address",
            width: "auto",

          },
          slots: {
            //empty:{type:'component',value:Search},
            default: function (sp) {
              let address = sp.slotValue.row.address;
              //This the HTML of el-tag
              return (
                '<span class="el-tag el-tag--success el-tag--dark">' +
                '<span class="el-tag__content">' +
                address +
                "</span>" +
                "</span>"
              );
            },
          },
        },
      ],
    },
  },
  events: {},
}


export const tableConfig2 = {
  //vueWrapper will use this transform to generate table configuration
  '~transform':tableTransform,
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
      _formatter: elTagFormatter('primay','name'),
    },
    {
      prop: "address",
      label: "Address",
      _formatter: elTagFormatter('success','address'),
    },
  ],
};

function elTagFormatter(type, key) {
  return function (sp) {
    let address = sp.slotValue.row[key];
    //This the HTML of el-tag
    return (
      '<span class="el-tag el-tag--'+type+' el-tag--dark">' +
      '<span class="el-tag__content">' +
      address +
      "</span>" +
      "</span>"
    );
  };
}



export function tableTransform(config: any) {
  // console.log(JSON.stringify(ctx.props))
  let result = {
    sys: {
      component: "el-table",
    },
    props: {
      stripe: true,
      border: true,
      showHeade: true,
      //
      data: tableValue,
    },
    slots: {default: {type: "wrap", value: []}}
  };
  //build default
  result.slots.default.value = buildColumns(config);
  //
  return result
}

function buildColumns( config: any) {
  let columns = [];
  //
  for (let c of config.columns || []) {
    columns.push(buildColumn( c));
  }
  //
  return columns;
}
function buildColumn(c: any) {
  let column = {
    sys: {
      component: "el-table-column",
    },
    props: {},
  };
  //props
  for (let k of Object.keys(c)) {
	if(k.startsWith('_')){
		continue;
	}
    column.props[k] = c[k];
  }
  //If there is a formatter, try to handle this
  if (c._formatter){
	column.slots={default:c._formatter}
  }
  //
  return column;
}
