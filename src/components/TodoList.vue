<template>
  <ui5-list id="todo-list" selection-mode="Multiple" ref="list">
    <TodoItem v-for="(todo) in todos" :todo="todo" :key="todo.id" :datakey="todo.id"
    @item-deleted="onItemDeleted"
    @item-edit="onItemEdit">
    </TodoItem>
  </ui5-list>
</template>

<script>
import TodoItem from './TodoItem.vue';
import "@ui5/webcomponents/dist/List";


export default {
  components: {
    TodoItem
  },
  props: ["todos"],
  methods: {
    onItemDeleted(event) {
      this.$emit('item-deleted', event);
    },
    onItemEdit(event) {
      this.$emit('item-edit', event);
    }
  }
};

</script>

<style>

</style>
