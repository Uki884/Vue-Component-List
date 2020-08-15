import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import BaseInputText from './BaseInputText.vue'
import BaseTextarea from './BaseTextarea.vue'

storiesOf('Atoms/InputText', module)
  .addDecorator(withKnobs)
  .add('BaseInputText', () => ({
    components: { BaseInputText },
    props: {
      placeholder: {
        default: text('placeholder', 'Hello Storybook')
      },
      disabled: {
        default: boolean('disabled', false)
      }
    },
    template: `<BaseInputText
        :placeholder="placeholder"
        :disabled="disabled"
      />`
  }))
  .add('BaseTextArea', () => ({
    components: { BaseTextarea },
    props: {
      type: {
        type: String
      }
    },
    template: `<BaseTextarea
        :type="type"
      />`
  }))
