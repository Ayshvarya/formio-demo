import _ from 'lodash';
const EditFormUtils=require('formiojs/components/base/editForm/utils').default;
import baseForm from 'formiojs/components/base/Base.form';
import textDisplaytab from 'formiojs/components/textfield/editForm/TextField.edit.display';
const TextFieldComponent = require('formiojs/components/textfield/TextField').default;
const newObj=[
  {
    key:'hideLabel',
    ignore:true
  },
  
];
let objIndex = textDisplaytab.findIndex((obj => obj.key == 'inputMask'));
textDisplaytab[objIndex].label="CustomLabel";
textDisplaytab[objIndex].placeholder="Custom mask";
Array.prototype.push.apply(textDisplaytab,newObj);

const Content= [
    {
      key: 'customComponentDescription',
      label: 'Custom component description',
      input: false,
      tag: 'p',
      content: 'Custom components can be used to render special fields or widgets inside your app. ' +
        'For information on how to display in an app, see ' +
        '<a href="http://help.form.io/userguide/#custom" target="_blank">' +
        'custom component documentation' +
        '</a>.',
      type: 'htmlelement',
      weight: 0
    },
    {
      weight: 5,
      type: 'textfield',
      input: true,
      key: 'label',
      label: 'Labeldddd',
      placeholder: 'Field Label',
      tooltip: 'The label for this field that will appeaccdfdfdfr next to it.',
      validate: {
        required: true
      },
    }
    
]



// export default function(...extend) {
//   return baseForm([
//     {
//       key: 'display',
//       components: Content
//     },
//     {
//       key: 'data',
//       ignore: true
//     },
//     {
//       key: 'validation',
//       ignore: true
//     },
//     {
//       key: 'api',
//       ignore: true
//     },
//     {
//       key: 'conditional',
//       ignore: true
//     },
//     {
//       key: 'logic',
//       ignore: true
//     }
//   ]);
// }

export default function(...extend){
  const components = _.cloneDeep([
    {
      type: 'tabs',
      key: 'tabs',
      components: [
        {
          label: 'Display',
          key: 'display',
          weight: 0,
          components: Content
        }
      ]
    }
  ]);
  return {
    components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}