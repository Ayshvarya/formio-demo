
export default [
    {
        weight: 0,
        type: 'textfield',
        input: true,
        key: 'label',
        label: 'Label',
        placeholder: 'Field Label',
        tooltip: 'The label for this field that will appear next to it.',
        validate: {
          required: true
        }
      },
      {
        type: 'select',
        key: 'style',
        label: 'Style',
        input: true,
        dataSrc: 'values',
        weight: 110,
        tooltip: 'To set the style of this field.',
        data: {
          values: [
            { label: 'Default', value: 'default' },
           
          ]
        }
      },
      {
        type: 'select',
        key: 'alignment',
        label: 'Text alignment',
        input: true,
        dataSrc: 'values',
        weight: 110,
        tooltip: 'To set the text alignment of this field.',
        data: {
          values: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
            { label: 'Center', value: 'center' }
          ]
        }
      },
      {
        type: 'select',
        key: 'inputType',
        label: 'Input Type',
        input: true,
        dataSrc: 'values',
        weight: 110,
        tooltip: 'To set the input type of this field.',
        data: {
          values: [
            { label: 'Text', value: 'text' },
            { label: 'Password', value: 'password' },
            { label: 'Number', value: 'number' },
            { label: 'Email', value: 'email' }
          ]
        }
      },
      {
        weight: 11,
        type: 'checkbox',
        label: 'Icon',
        tooltip: 'The icon for this field.',
        key: 'icon',
        input: true
      },
      {
        weight: 12,
        type: 'button',
        label: 'Select Icon',
        tooltip: 'To select the icon for this field.',
        key: 'setIcon',
        disabled: true,
        input: true
      },
      {
        type: 'select',
        key: 'iconAlignment',
        label: 'Icon Alignment',
        input: true,
        dataSrc: 'values',
        weight: 13,
        tooltip: 'To set the icon alignment of this field.',
        data: {
          values: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' }
            
          ]
        },
        conditional: {
          json: { '!!': { var: 'data.icon' } }
        }
      },
      {
        weight: 420,
        type: 'textfield',
        input: true,
        key: 'prefix',
        label: 'Prefix'
      },
      {
        weight: 421,
        type: 'textfield',
        input: true,
        key: 'suffix',
        label: 'Suffix'
      },
]