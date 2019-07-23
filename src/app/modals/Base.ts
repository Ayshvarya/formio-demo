const Base=require('formiojs/components/base/Base');
const TextField=require('formiojs/components/textfield/TextField').default;
TextField.schema=function() {
    for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
      extend[_key] = arguments[_key];
    }

    return Base.default.schema.apply(Base.default, [{
      label: 'Text Field',
      key: 'textField',
      type: 'textfield',
      mask: false,
      inputType: 'text',
      hideLabel:'true',
      inputMask: '',
      widget: {
        format: 'yyyy-MM-dd hh:mm a',
        dateFormat: 'yyyy-MM-dd hh:mm a',
        saveAs: 'text'
      },
      validate: {
        minLength: '',
        maxLength: '',
        minWords: '',
        maxWords: '',
        pattern: ''
      }
    }].concat(extend));
  }