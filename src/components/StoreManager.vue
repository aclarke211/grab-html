<template>
  <div :class="className">
    <div :class="`${className}__state`">
      <InputModule
        :label="findPropertyInStore('useCustomConfig', 'key').key"
        :value="findPropertyInStore('useCustomConfig', 'key').value"
        @value-changed="updateStore($event, findPropertyInStore('useCustomConfig', 'key').key)" />

      <InputModule
        :label="findPropertyInStore('sites', 'key').key"
        :value="findPropertyInStore('sites', 'key').value"
        @value-changed="updateStore($event, findPropertyInStore('sites', 'key').key)"
        @remove-array-item="removeArrayItemFromStore($event)" />

      <InputModule
        :label="findPropertyInStore('currentRoute', 'key').key"
        :value="findPropertyInStore('currentRoute', 'key').value"
        :editable="false"
        @value-changed="updateStore($event, findPropertyInStore('currentRoute', 'key').key)"
      />
    </div>

    <h3
      :class="`${className}__heading`"
      v-html="'Options'" />
    <div
      :class="`${className}__btns-container`">
          <button
          :class="`${className}__btn`"
          @click="manageSitesClicked()">
          Manage Sites
        </button>
    </div>

    <ModalModule
      :showModal="showModal"
      @modal-outer-clicked="showModal = false"
      @modal-close-clicked="showModal = false"
      :title="modalDetails.title"
      :inputs="modalDetails.inputs"
      :buttonsDirection="modalDetails.buttonsDirection"
      :buttons="modalDetails.buttons">
      <div
        v-if="modalDetails.html"
        class="modal-module__slot"
        v-html="modalDetails.html" />
    </ModalModule>
  </div>
</template>

<script>
import InputModule from '@/modules/InputModule.vue';
import ModalModule from '@/modules/ModalModule.vue';

export default {
  name: 'StoreManager',

  components: {
    InputModule,
    ModalModule,
  },

  data: () => ({
    className: 'store-manager',
    showModal: false,
    modalDetails: {
      title: '',
      html: '',
      inputs: [],
      buttons: [],
      buttonsDirection: 'horizontal',
    },
  }),

  computed: {
    storeItems() {
      return Object.entries(this.$store.state);
    },
  },

  methods: {
    manageSitesClicked() {
      // this.$store.commit('addSite', { name: 'Test Site', url: '/test-site' });

      this.modalDetails.title = 'Manage Sites';
      this.modalDetails.html = `
        How would you like to manage the sites?
      `;
      this.modalDetails.buttonsDirection = 'vertical';
      this.modalDetails.inputs = [];
      this.modalDetails.buttons = [
        {
          text: 'Add Single Site',
          // eslint-disable-next-line
          onClick: () => { this.addSite('single'); },
        },
        {
          text: 'Add Multiple Sites',
          onClick: () => { this.addSite('multiple'); },
        },
      ];
      this.showModal = true;
    },

    addSite(amount) {
      if (amount === 'single') {
        // eslint-disable-next-line
        // alert('Add Single Site clicked.');

        const site = {};

        this.modalDetails.title = 'Add Single Site';
        this.modalDetails.html = `
          You are about to add a Single Site.
        `;
        this.modalDetails.inputs = [
          {
            label: 'Site Name',
            value: 'Name of the site',
            direction: 'horizontal',
            editable: true,
          },
        ];
        this.modalDetails.buttons = [
          {
            text: 'Add Site',
            onClick: () => {
              this.$store.commit('addSite', site);
              this.showModal = false;
            },
          },
        ];
      } else if (amount === 'multiple') {
        // eslint-disable-next-line
        alert('Add Multiple Sites clicked.');
      }
    },

    updateStore(emitEvent, key) {
      if (emitEvent.key === key) {
        this.$store.commit(`update__${emitEvent.key}`, emitEvent.value);
      }
    },

    removeArrayItemFromStore(emitEvent) {
      this.$store.commit('removeArrayItem', emitEvent);
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
