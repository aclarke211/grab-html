<template>
  <div :class="className">
    <label
      :class="`${className}__label`"
      :for="uniqueId"
      v-html="label"/>

      <div
        v-if="inputType === types.boolean"
        :class="`${className}__input`">
        <input
          :class="`${className}__value`"
          :type="types.boolean"
          v-model="value" >
      </div>
  </div>
</template>

<script>
export default {
  name: 'InputModule',

  props: {
    label: {
      type: String,
      default: 'Example Checkbox',
    },

    value: {
      type: [Boolean, String, Object, Array],
      default: true,
    },
  },

  computed: {
    uniqueId() {
      // eslint-disable-next-line
      return `${this.className}__${this.inputType}__${this._uid}`;
    },

    valueType() {
      return typeof this.value;
    },

    inputType() {
      return this.types[this.valueType];
    },
  },

  data: () => ({
    className: 'input-module',
    types: {
      boolean: 'checkbox',
    },
  }),

  watch: {
    value() {
      this.$emit('value-changed', {
        key: this.label,
        value: this.value,
      });
    },
  },
};
</script>
