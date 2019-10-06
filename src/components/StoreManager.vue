<template>
  <div :class="className">
      <div :class="`${className}__state`">

        <InputModule
          :label="findPropertyInStore('useCustomConfig', 'key').key"
          :value="findPropertyInStore('useCustomConfig', 'key').value"
          @value-changed="updateStore($event)" />

        <InputModule
          :label="findPropertyInStore('sites', 'key').key"
          :value="findPropertyInStore('sites', 'key').value"
          @value-changed="updateStore($event)" />

        <InputModule
          :label="findPropertyInStore('currentRoute', 'key').key"
          :value="findPropertyInStore('currentRoute', 'key').value"
          @value-changed="updateStore($event)"
        />


        <h3
          :class="`${className}__heading`"
          v-html="'State'" />
        <div
          class="store-items">
            <div
              v-for="(storeItem, storeItemKey) in storeItems"
              :key="storeItemKey"
              class="store-item">
              <div class="store-item__key">{{ storeItem[0] }}</div>
              <div class="store-items__value">{{ storeItem[1] }}</div>
            </div>
        </div>
      </div>

      <h3
        :class="`${className}__heading`"
        v-html="'Buttons'" />
      <div
        :class="`${className}__btns-container`">
            <button
            :class="`${className}__btn`"
            @click="addSiteClicked()">
            Add Site
          </button>
      </div>

  </div>
</template>

<script>
import InputModule from '@/modules/InputModule.vue';

export default {
  name: 'StoreManager',

  components: {
    InputModule,
  },

  data: () => ({
    className: 'store-manager',
  }),

  computed: {
    storeItems() {
      return Object.entries(this.$store.state);
    },
  },

  methods: {
    addSiteClicked() {
      this.$store.commit('addSite', { name: 'Test Site', url: '/test-site' });
    },

    updateStore(emitEvent) {
      this.$store.commit(`update__${emitEvent.key}`, emitEvent.value);
    },

    findPropertyInStore(property, type) {
      let propertyType;

      if (type === 'key') {
        propertyType = 0;
      }

      if (type === 'value') {
        propertyType = 1;
      }

      const filteredItem = this.storeItems.filter(item => item[propertyType] === property);

      return {
        key: filteredItem[0][0],
        value: filteredItem[0][1],
      };
    },
  },
};
</script>

<style lang="scss">
.store-manager {
  margin: 2rem;

  &__title {
    font-size: 2rem;
    margin: .5rem 0;
  }

  &__description {
    font-size: 1rem;
  }

  &__heading {
    font-size: 1.5rem;
    margin: 2rem 0 .25rem 0;
  }

  .store-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .store-item {
      display: flex;
      flex-flow: row wrap;
      margin: .5rem 0;

      &__key {
        font-weight: 600;

        &::after {
          content: ':';
          margin-right: .5rem;
        }
      }

      &__value {
        font-weight: 400;
      }
    }
  }

  &__store-tree {
    font-size: 1.25rem;
  }

  &__btns-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
  }

  &__btn {
    $btnBgColor: gainsboro;

    margin: 1rem;
    background-color: $btnBgColor;
    border: 1px solid $btnBgColor;
    padding: .75rem 2rem;
    font-size: .85rem;
    border-radius: .25rem;
    cursor: pointer;
    transition: all .5s;
    outline: none;

    &:hover {
      background-color: lighten($btnBgColor, 10%);
    }

    &:active {
      transition: background-color .25s;
      background-color: seagreen;
    }
  }
}
</style>
