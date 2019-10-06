<template>
  <div :class="[className, direction]">
    <label
      :class="`${className}__label`"
      :for="uniqueId"
      v-html="label"/>

      <div
        v-if="inputType === types.string"
        :class="[`${className}__input`, `${className}__input--${inputType}`]">
        <input
          v-if="editable"
          :class="`${className}__value`"
          :id="uniqueId"
          :type="types.string"
          v-model="value">

          <p
            v-if="!editable"
            :class="`${className}__text`"
            v-html="value" />
      </div>

      <div
        v-if="inputType === types.boolean"
        :class="[`${className}__input`, `${className}__input--${inputType}`]">
        <input
          v-if="editable"
          :class="`${className}__value`"
          :id="uniqueId"
          :type="types.boolean"
          v-model="value" >

          <p
            v-if="!editable"
            :class="`${className}__text`"
            v-html="value" />
      </div>

      <div
        v-if="inputType === types.array"
        :class="[`${className}__input`, `${className}__input--${inputType}`]">
          <div
            :class="`${className}__input--array`"
            v-for="(property, propertyKey) in this.value"
            :key="propertyKey">
            {{ property }}
            </div>
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

    direction: {
      type: String,
      default: 'horizontal',
    },

    editable: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    uniqueId() {
      // eslint-disable-next-line
      return `${this.className}__${this.inputType}__${this._uid}`;
    },

    valueType() {
      if (Array.isArray(this.value)) {
        return 'array';
      }

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
      array: 'array',
      string: 'text',
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

<style lang="scss">
.input-module {
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &.horizontal {
    flex-flow: row wrap;
  }

  &.vertical {
    flex-flow: column wrap;
    align-items: flex-start;
  }

  &__label {
    &::after {
      content: ':';
      margin-right: 1rem;
    }
  }
}
</style>
