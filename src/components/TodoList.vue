<template>
  <ui5-list mode="MultiSelect" @selectionChange="onSelectionChange">
    <slot
      v-for="todo in todos"
      name="todo"
      :todo="todo"
    />
  </ui5-list>
</template>

<script>
import "@ui5/webcomponents/dist/List";

export default {
  props: ["todos"],
  methods: {
    onSelectionChange(event) {
      const selectedItem = event.detail.items[0];
      if(selectedItem == null) { return; }
      const selectedId = selectedItem.getAttribute("data-key");
      const todo = this.todos.find(({ id }) => id === selectedId);
      this.$emit('selectionchange', todo);
    }
  }
};
</script>
