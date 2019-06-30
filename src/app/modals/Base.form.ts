import _ from 'lodash';
const EditFormUtils=require('formiojs/components/base/editForm/utils');
const baseForm=require('formiojs/components/base/Base.form');
const BaseEditDisplay=require('formiojs/components/base/editForm/Base.edit.display');
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
      tooltip: 'The label for this field that will appear next to it.',
      validate: {
        required: true
      },
    }
    
]


baseForm.default=function(){
    var components = _.cloneDeep([{
        type: 'tabs',
        key: 'tabs',
        components: [{
          label: 'Display',
          key: 'display',
          weight: 0,
          components: BaseEditDisplay.default
        },
        {
            label:'Custom',
            key:'custom',
            components:Content
        }
    
    
    ]
      }]);
    
      return {
        components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
          type: 'hidden',
          key: 'type'
        })
      };
}