<template>
  <ui5-list id="todo-list" mode="MultiSelect" ref="list" @selectionChange="onSelectionChange">
    <TodoItem v-for="(todo) in todos" :todo="todo" :key="todo.id" :datakey="todo.id"
    @itemdeleted="onItemDeleted"
    @itemedit="onItemEdit">
    </TodoItem>
  </ui5-list>
</template>

<script>
import Vue from "vue";
import './TodoItem.vue';
import "@ui5/webcomponents/dist/List";


let TodoList = Vue.component('TodoList', {
  props: ["todos"],
  methods: {
    onSelectionChange(event) {
      this.$emit('selectionchange', event);
    },
    onItemDeleted(event) {
      this.$emit('itemdeleted', event);
    },
    onItemEdit(event) {
      this.$emit('itemedit', event);
    }
  }
});

export default TodoList;

</script>

<style>

</style>
