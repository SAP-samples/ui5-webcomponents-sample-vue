<template>
  <ui5-li-custom :data-key="datakey" :selected="selected">
    <div class="li-content">
      <span class="li-content-text">{{todo.text}} - finish before: {{todo.deadline}}</span>
      <div class="li-content-actions">
        <ui5-button class="edit-btn" @click="onEditPress">Edit</ui5-button>
        <ui5-button design="Negative" @click="onDeletePress">Delete</ui5-button>
      </div>
    </div>
  </ui5-li-custom>
</template>

<script>
import "@ui5/webcomponents/dist/CustomListItem";

export default {
  props: ["todo", "datakey"],
  computed: {
    selected() {
      return this.todo.done || undefined;
    },
  },
  methods: {
    onEditPress() {
      this.$emit('item-edit', { id: this.todo.id });
    },
    onDeletePress() {
      this.$emit('item-deleted', { id: this.todo.id });
    }
  }
};

</script>


<style>

</style>
