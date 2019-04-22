<template>
  <ui5-li-custom :data-key="todo.id" :selected="todo.done">
    <div class="li-content">
      <span class="li-content-text">{{todo.text}} - finish before: {{todo.deadline}}</span>
      <div class="li-content-actions">
        <ui5-button class="edit-btn" @press="$emit('edit')">Edit</ui5-button>
        <ui5-button type="Negative" @press="$emit('delete')">Delete</ui5-button>
      </div>
    </div>
  </ui5-li-custom>
</template>

<script>
import "@ui5/webcomponents/dist/CustomListItem";
export default {
  props: ["todo"]
};
</script>
