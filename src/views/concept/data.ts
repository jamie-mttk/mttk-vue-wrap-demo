import { ref, reactive,computed} from "vue";

//The value of the input which are shared in this sample
export const valueInput = ref("InitValue");

//A simple input configuration
export const configInput1 = {
  //System level configuration
  sys: {
    //The component to render
    component: "ElInput",
    //
    modelValue: valueInput
  },
  //Properties
  props: {
    placeholder: "Please input value",
    clearable: true,
  }
}
//
//Input size to demostrate that the config properties can be changed dynamically
const inputSize = ref("default");
//A complex input configuration
export const configInput2 = reactive({
  sys: {
    //
    component: "ElInput",
    //Model value can also be set as a readable and writable computed
    //Here it is not necessary to use computed,just for demo
    modelValue: computed({
      get() {
        return valueInput.value
      },
      set(value) {
        valueInput.value=value
      }
    }),
  },
  props: {
    placeholder: "Please input value complex sample",
    clearable: true,
    prefixIcon: "Calendar",
    disabled: false,
    size: inputSize,
  },
  //Below is to demo the slot use
  slots: {
    //It can be an array/object, the value can be an array/object as well
    //For one slot it can be configured by different types
    prefix: [
      { type: "text", value: ["text1", "text2"] },
      {
        type: "wrap",
        value: {
          //Use element tag to display name
          sys: {
            component: "el-tag",
          },
          props: {
            type: "warning",
            effect: "dark",
          },
          slots: {
            default: "Test tag1",
          },
          events: {},
        },
      },
    ],
    //If both inherit and something else is configured, what will happen?
    //If the inherit is implemented at parent component ,the inherit will take place;otherwise the inherit is ignored
    suffix: [{ type: "inherit", value: "mysuffix" }, "Pure text"],

    //Here to demostrate different way to set slots
    prepend: { type: "function", value: samplePrepend },
    //The value is a array
    append: [{ type: "html", value: "H<b>ell</b>o " }, sampleAppend],
  },
  //Define events
  events: {
    //Once get focus enlarge the component and restore once lose focus
    blur: { type: "function", value: inputBlur },
    focus: { type: "function", value: inputFocused },
  },
  lifecycle:{
    onMounted:()=>{
      console.log('el-input is mounted>>>>>>>>>>>>>')
    },
    onUnmounted:()=>{
      console.log('el-input is unmounted<<<<<<<<<<<<')
    }
  }
});
//
function samplePrepend() {
  return "Hello <b>prepend</b>";
}
function sampleAppend() {
  return "World <b>append</b>";
}

function inputFocused() {
  inputSize.value = "large";
}
function inputBlur() {
  inputSize.value = "small";
}

//Flat configuration
export const configInput3 ={
  //sys
    "~component": "ElInput",
    "~modelValue": valueInput,
  //props
    placeholder: "Please input value complex sample",
    clearable: true,
    prefixIcon: "Calendar",
    disabled: false,
    size: inputSize,
  //slots: 
    //It can be an array/object, the value can be an array/object as well
    //For one slot it can be configured by different types
    "#prefix": [
      { type: "text", value: ["text1", "text2"] },
      {
        type: "wrap",
        value: {
          //Use element tag to display name
          sys: {
            component: "el-tag",
          },
          props: {
            type: "success",
            effect: "dark",
          },
          slots: {
            default: "Test tag1",
          },
          events: {},
        },
      },
    ],
    //If both inherit and something else is configured, what will happen?
    //If the inherit is implemented at parent component ,the inherit will take place;otherwise the inherit is ignored
    "#suffix": [{ type: "inherit", value: "mysuffix" }, "Pure text"],

    //Here to demostrate different way to set slots
    "#prepend": { type: "function", value: samplePrepend },
    //The value is a array
    "#append": [{ type: "html", value: "H<b>ell</b>o " }, sampleAppend],

  //events: 
    //Once get focus enlarge the component and restore once lose focus
    "@blur": { type: "function", value: inputBlur },
    "@focus": { type: "function", value: inputFocused },
    //lifecycle
    "^onMounted":()=>{
      console.log('el-input is mounted of flat config >>>>>>>>>>>>>')
    },
    "^onUnmounted":()=>{
      console.log('el-input is unmounted of flat config <<<<<<<<<<<<')
    }
}