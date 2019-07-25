import baseEditForm from '../Base.form';
const textFieldForm=require('formiojs/components/textfield/TextField.form');
import TextFieldEditDisplay from './TextFieldEditDisplay';
const builder=require('formiojs/components/builder');
textFieldForm.default = function() {
  return baseEditForm([
    {
      key: 'display',
      components: TextFieldEditDisplay
    }
    
  ]);
}
builder.default.textfield.editForm = textFieldForm.default;

