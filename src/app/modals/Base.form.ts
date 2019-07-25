import _ from 'lodash';
const EditFormUtils=require('formiojs/components/base/editForm/utils').default;
const baseForm=require('formiojs/components/base/Base.form');
import BaseEditDisplay from './BaseEditDisplay';
import { ifError } from 'assert';
const BaseEditAPI=require('formiojs/components/base/editForm/Base.edit.api');

// BaseEditDisplay.default=_.filter(BaseEditDisplay.default, function(obj) {
//   return obj.key != 'label';
// });
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
      label: 'Labelddddsdd',
      placeholder: 'Field Label',
      tooltip: 'The label for this field that will appear next to it.',
      validate: {
        required: true
      },
    },
    {
      weight: 6,
      type: 'customComp',
      input: true,
      key: 'label',
      label: 'Custom Tag',
      placeholder: 'Field Label',
      tooltip: 'custom Component test'
      
    }
    
]


export default baseForm.default=function(...extend){

    var components = _.cloneDeep([{
        type: 'tabs',
        key: 'tabs',
        components: [{
          label: 'Display',
          key: 'display',
          weight: 0,
          components: BaseEditDisplay
        },
        {
            label:'Custom',
            key:'custom',
            weight:20,
            components:Content
        },
        {
          label:'API',
          key:'api',
          weight:30,
          components:BaseEditAPI.default
      }
    
    
    ]
      }]);
      let a1=components[0].components;
      let a2= [].concat.apply([], extend);;
      
      let merged= _.map(a1,(item)=>{
          let obj=a2.find(item2 => item2.key == item.key);
          if(obj){
            return {
              key:item.key,
              weight:item.weight,
              label:item.label,
              components:EditFormUtils.sortAndFilterComponents([...item.components,...obj.components])
            }
          }
          else{
            return {
              key:item.key,
              weight:item.weight,
              label:item.label,
              components:item.components
            }
          }
      });
      components[0].components=merged;
      return {
        components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
          type: 'hidden',
          key: 'type'
        })
      };
}