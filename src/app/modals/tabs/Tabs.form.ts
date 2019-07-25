import nestedComponentForm from '../Base.form';

const TabsEditDisplay =require('formiojs/components/tabs/editForm/Tabs.edit.display');

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: TabsEditDisplay.default
    }
  ], ...extend);
}