const TextFieldComponent = require('formiojs/components/textfield/TextField').default;
const Components =  require('formiojs/components/Components').default;
export default class TextFieldExtComponent extends TextFieldComponent{
    static schema(...extend) {
        return TextFieldComponent.schema({
            alignment: 'left',
            icon: false,
            iconAlignment : 'left',
            style: 'default'
        }, ...extend);
      }

      static get builderInfo() {
        return {
          title: 'Text Field',
          icon: 'fa fa-terminal',
          group: 'basic',
          documentation: 'http://help.form.io/userguide/#textfield',
          weight: 0,
          schema: TextFieldExtComponent.schema()
        };
      }

    constructor(component, options, data){
        super(component, options, data);
    }

   
    createInput(container){
        let inputGroup =super.createInput(container);
        this.addInputType(inputGroup,this.checkStatus());
        this.setInputAlignment(inputGroup,this.checkStatus());
        this.setIcon();
        this.setIconAlignment(inputGroup);
        return inputGroup;
    }
    
    checkStatus(){
        if(this.component.prefix || this.component.suffix || this.component.icon){
            return true;
        }
        return false;
    }
    addInputType(inputGroup,status){
        if(status){
            inputGroup.querySelector('input').type = this.component.inputType;    
        }
        else{
            inputGroup.type=this.component.inputType;
        }
        if(this.component.inputType == "email"){
            this.validators.push('email');
        }
    }

    setInputAlignment(inputGroup,status){
        if(status){
            inputGroup.querySelector('input').style['text-align'] = this.component.alignment;    
        }
        else{
            inputGroup.style['text-align'] = this.component.alignment;
        }
    }

    setIconAlignment(inputGroup){
        let icon = null;
        if (this.component.icon) {
            icon = this.ce('div', {
                class: 'input-group-addon input-group-icon'
            });
            icon.appendChild(this.ce('span', {
                class: 'fa fa-terminal'
            }));
            if(this.component.iconAlignment == 'left'){
                inputGroup.insertBefore(icon,inputGroup.firstChild);
            }
            else{
                inputGroup.appendChild(icon);
            }
        }
       return icon;
    }


    setIcon(){
        this.component.iconAlignment = this.component.icon ? this.component.iconAlignment : 'left';
    }

    addInputGroup(input, container) {
        let inputGroup = null;
        if (this.component.prefix || this.component.suffix || this.component.icon) {
          inputGroup = this.ce('div', {
            class: 'input-group'
          });
          container.appendChild(inputGroup);
        }
        
        return inputGroup;
      }

}

Components.setComponent('textfield',TextFieldExtComponent);