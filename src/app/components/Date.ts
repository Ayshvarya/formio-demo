import _ from 'lodash';
const BaseComponent = require('formiojs/components/base/Base').default;
const Components = require('formiojs/components/Components').default;
import baseEditForm from '../modals/Date.form';
export default class DateComponent extends BaseComponent {
    static schema() {
        return BaseComponent.schema({
          type: 'date',
          label: 'Date',
          key: 'date',
          format: 'dd-MM-yyyy',
          allowInput: true,
          enableDate: true,
          enableTime: false,
          defaultDate: '09-Mar-1993',
          datepickerMode: 'day',
          datePicker: {
            showWeeks: true,
            startingDay: 0,
            initDate: '',
            minMode: 'day',
            maxMode: 'year',
            yearRows: 4,
            yearColumns: 5,
            minDate: null,
            maxDate: null
          }
        });
      }

      static get builderInfo() {
        return {
          title: 'Date',
          group: 'basic',
          icon: 'fa fa-calendar-plus-o',
          documentation: 'http://help.form.io/userguide/#datetime',
          weight: 0,
          schema: DateComponent.schema(),
        };
      }

      constructor(component, options, data) {
        super(component, options, data);
        const timezone = (this.component.timezone || this.options.timezone);
    
        // Change the format to map to the settings.
        if (!this.component.enableDate) {
          this.component.format = this.component.format.replace(/yyyy-MM-dd /g, '');
        }
        if (!this.component.enableTime) {
          this.component.format = this.component.format.replace(/ hh:mm a$/g, '');
        }
        else {
          this.component.format = this.component.format.replace(/HH:mm$/g, 'hh:mm a');
        }
    
        /* eslint-disable camelcase */
        this.originalComponent.widget = this.component.widget = {
          type: 'calendar',
          timezone,
          submissionTimezone: this.submissionTimezone,
          language: this.options.language,
          useLocaleSettings: _.get(this.component, 'useLocaleSettings', false),
          allowInput: _.get(this.component, 'allowInput', true),
          mode: this.component.multiple ? 'multiple' : 'single',
          enableTime: _.get(this.component, 'enableTime', true),
          noCalendar: !_.get(this.component, 'enableDate', true),
          format: this.component.format,
          defaultDate: this.component.defaultDate,
          readOnly: this.options.readOnly,
          minDate: _.get(this.component, 'datePicker.minDate'),
          maxDate: _.get(this.component, 'datePicker.maxDate')
        };
        /* eslint-enable camelcase */
    
        // Add the validators date.
        this.validators.push('date');
      }

      get defaultSchema() {
        return DateComponent.schema();
      }

      get emptyValue() {
        return '';
      }

      isEmpty(value) {
        if (value && (value.toString() === 'Invalid Date')) {
          return true;
        }
        return super.isEmpty(value);
      }

      createWrapper() {
        return false;
      }
      
    
}
DateComponent.editForm=baseEditForm;
Components.addComponent('date', DateComponent);
Components.setComponent('date',DateComponent);
