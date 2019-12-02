<template>
  <ui5-li-custom :data-key="datakey" :selected="todo.done">
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
import Vue from "vue";
import "@ui5/webcomponents/dist/CustomListItem";

let TodoItem = Vue.component('TodoItem', {
  props: ["todo", "datakey"],
  methods: {
    onEditPress() {
      this.$emit('item-edit', { id: this.todo.id });
    },
    onDeletePress() {
      this.$emit('item-deleted', { id: this.todo.id });
    }
  }
});

export default TodoItem;

</script>

<style>

</style>
