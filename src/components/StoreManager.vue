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

      <InputModule
        :label="findPropertyInStore('currentModalView', 'key').key"
        :value="findPropertyInStore('currentModalView', 'key').value"
        :editable="false"
        @value-changed="updateStore($event, findPropertyInStore('currentModalView', 'key').key)"
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
      @modal-outer-clicked="modalClosed()"
      @modal-close-clicked="modalClosed()"
      :title="modalDetails.title"
      :buttonsDirection="modalDetails.buttonsDirection"
      :buttons="modalDetails.buttons">
      <div
        class="modal-module__slot">
        <div
          v-if="modalDetails.html"
          class="modal-module__html"
          v-html="modalDetails.html" />


          <div
            class="modal-module__add-single-site__inner"
            v-if="$store.state.currentModalView === modalViews.addSingleSite">

            <div
              v-if="modalDetails.inputs.general.length"
              :class="`modal-module__inputs-container`">
            <h3
              class="modal-module__subtitle">General:</h3>
            <InputModule
            v-for="(input, inputKey) in modalDetails.inputs.general"
            :key="inputKey"
            :hideLabel="input.hideLabel || false"
            :label="input.label || 'Default Label'"
            :hideValue="input.hideValue || false"
            :value="input.value || 'Default Value'"
            :direction="input.direction || 'horizontal'"
            :editable="input.editable || true"
            :labelUnderline="input.labelUnderline || false"
            @value-changed="updateInputValue($event, inputKey)" />
            </div>

            <div
              v-if="modalDetails.inputs.identifiers.length"
              :class="`modal-module__inputs-container`">
            <h3
              class="modal-module__subtitle">Identifiers:</h3>
            <InputModule
            v-for="(input, inputKey) in modalDetails.inputs.identifiers"
            :key="inputKey"
            :hideLabel="input.hideLabel || false"
            :label="input.label || 'Default Label'"
            :hideValue="input.hideValue || false"
            :value="input.value || 'Default Value'"
            :direction="input.direction || 'horizontal'"
            :editable="input.editable || true"
            :labelUnderline="input.labelUnderline || false"
            @value-changed="updateInputValue($event, inputKey)" />
            </div>
          </div>

      </div>
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
      inputs: {
        general: [],
        identifiers: [],
      },
      buttons: [],
      buttonsDirection: 'horizontal',
    },
    modalViews: {
      manageSites: 'manage-sites',
      addSingleSite: 'add-single-site',
      addMultipleSites: 'add-multiple-sites',
    },
  }),

  computed: {
    storeItems() {
      return Object.entries(this.$store.state);
    },
  },

  methods: {
    modalClosed() {
      this.showModal = false;
      this.$store.commit('update__currentModalView', 'none');
    },

    // updateInputValue(emitEvent, inputKey) {
    //   if (emitEvent.value === '') {
    //     this.modalDetails.inputs[inputKey].value = ' ';
    //   } else {
    //     this.modalDetails.inputs[inputKey].value = emitEvent.value;
    //   }
    // },

    manageSitesClicked() {
      // this.$store.commit('addSite', { name: 'Test Site', url: '/test-site' });

      this.$store.commit('update__currentModalView', this.modalViews.manageSites);

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
      this.$store.commit('update__currentModalView', this.modalViews.addSingleSite);

      if (amount === 'single') {
        // eslint-disable-next-line
        // alert('Add Single Site clicked.');

        let site = {};

        this.modalDetails.title = 'Add Single Site';
        this.modalDetails.html = `
          Please enter the site details.
        `;

        this.modalDetails.inputs.general = [
          {
            label: 'Site Name',
            value: ' ',
          },
          {
            label: 'Site Description',
            value: ' ',
          },
          {
            label: 'Site URL',
            value: ' ',
          },
          {
            label: 'Category',
            value: ' ',
          },
          {
            label: 'Site Icon',
            value: ' ',
          },
        ];

        this.modalDetails.inputs.identifiers = [
          {
            label: 'Items',
            value: ' ',
          },
          {
            label: 'Item Title',
            value: ' ',
          },
          {
            label: 'Body Text',
            value: ' ',
          },
          {
            label: 'Item Image',
            value: ' ',
          },
          {
            label: 'Buttons',
            value: ' ',
          },
        ];

        this.modalDetails.buttons = [
          {
            text: 'Add Site',
            onClick: () => {
              // site = {
              //   name: this.modalDetails.inputs[1].value,
              //   description: this.modalDetails.inputs[2].value,
              //   url: this.modalDetails.inputs[3].value,
              //   category: this.modalDetails.inputs[4].value,
              //   icon: this.modalDetails.inputs[5].value,
              //   identifiers: {
              //     items: this.modalDetails.inputs[7].value,
              //     title: this.modalDetails.inputs[8].value,
              //     bodyText: this.modalDetails.inputs[9].value,
              //     buttons: this.modalDetails.inputs[10].value,
              //   },
              // };

              // this.$store.commit('addSite', site);
              // this.showModal = false;

              // eslint-disable-next-line
              alert('Need to write save functionality');
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
