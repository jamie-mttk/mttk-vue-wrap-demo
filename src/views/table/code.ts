export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">
    import { ref, } from 'vue'
    import { tableData, tableConfig1,tableConfig2 } from './data.ts'
    import {codeConfig} from './code.ts'
    import  CodeView from '@/components/CodeView/index.vue'
    //
    //
    function clearData(){
      tableData.value=[]
    }
    //
    const mainRef1=ref()
    // const mainRef2=ref()
    //
    function toggleRowSelection(){
      //mainRef1.value.getRef() returns the vue component instance
      mainRef1.value.getRef().toggleAllSelection()
      // mainRef2.value.getRef().toggleAllSelection()
    }
    </script>
    
    <template>
      <div style="margin:10px;">
    
        <h3>Table can be considered as a container: One el-table with multiple el-table-column.</h3>
        This is the table data:<br>{{ tableData }}<br>
        <el-button type="danger" @click="clearData">Clear data to see the content of empty slot</el-button>
        <h3>Here a simple sample to call method to clear selection.</h3>
        <el-button type="primary" @click="toggleRowSelection">Toggle selection</el-button><br><br>
        <h3>The below table is rendered with tableConfig1 in 'data.ts'</h3>
        <MttkWrapComp ref="mainRef1" :config="tableConfig1"></MttkWrapComp>
        <el-divider></el-divider>
        <h3>If look into the configuration, it is powerful and flexible,but it looks quite complex.<br />
        We could simplify the table configuration with customized configuration format (On the otherword, we only config the information we care about),
        and then write a piece of code (we call it Function component)to translate into the standard format as the config in the above sample.Refer to "data2.ts".<br>
        Since the transform code could be reused any where, that mean we could config a table easily.<br>
        How to simplfy the config depends on the requrirement, here is just a sample, you can define your own config file and function component code as you like.<br>
        Normally in a real project multiple config can be defined for different use cases with same function component.<br>
        </h3>
        
        <el-divider></el-divider>
        <MttkWrapComp ref="mainRef2" :config="tableConfig2"></MttkWrapComp>
        <el-divider></el-divider>
        <CodeView :config="codeConfig"></CodeView>
      </div>
    </template>
    `},
    {key:'data1.ts',caption:'data.ts',content:`import { ref, reactive, toRaw, unref } from "vue";

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
    `}
  ]