//
import { ref, reactive, computed } from "vue";


//
//
export default function useApp1Transtator(config,formValue,tableValue) {
  //
  function onSearch() {
	//First we could validate form here,ignored
	//Call configed function to retrieve data
    let result = config.retrieveMethod(formValue);
    tableValue.value = result;
  }
  //
  const configTranslated = reactive({
    sys: { component: "el-row" },
    props: {
      gutter: 10,
      justify: "start",
      align: "top",
    },
    //
    slots: {
      default: [
        {
          sys: { component: "el-col" },
          props: {
            span: 22,
          },
          slots: {
            default:config.criteriaConfig
          },
        },
        {
          sys: { component: "el-col" },
          props: {
            span: 2,
          },
          slots: {
            default: {
              sys: { component: "ElButton" },
              props: {
                type: "success",
              },
              slots: {
                default: "Search",
              },
              events: {
                click: onSearch,
              },
            },
          },
        },
        {
          sys: { component: "el-col" },
          props: {
            span: 24,
          },
          slots: {
            default:config.tableConfig
          },
        },
      ],
    },
  });
  //
  return { configTranslated, formValue, tableValue };
}
