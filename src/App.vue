<template>
  <div class="app">
        <header class="app-header">
          <ui5-toolbar class="header-toolbar">
            <img src='./assets/logo.png' alt="UI5 Logo" class="ui5-logo" />
            <ui5-title class="app-title">UI5 Web Components Vue Sample Application</ui5-title>
          </ui5-toolbar>
        </header>
        <section class="app-content">
          <div class="create-todo-wrapper">
            <ui5-input placeholder="My Todo ..." ref="todoInput" class="auto-width" id="add-input"></ui5-input>
            <ui5-datepicker format-pattern="dd/MM/yyyy" class="auto-width" ref="todoDeadline" id="date-picker"></ui5-datepicker>
            <ui5-button class="auto-width" ref="addButton" type="Emphasized" @press="handleAdd">Add Todo</ui5-button>
          </div>

          <div class="list-todos-wrapper">
            <TodoList :todos="todos" @selectionchange="handleDone"
            @itemdeleted="handleRemove"
            @itemedit="handleEdit">
            </TodoList>

            <ui5-panel header-text="Completed tasks">
              <TodoList :todos="doneTodos" @selectionchange="handleUndone"
              @itemdeleted="handleRemove"
              @itemedit="handleEdit">
              </TodoList>
            </ui5-panel>
          </div>
        </section>
        <ui5-dialog header-text="Edit Todo item" ref="editDialog">
          <div class="dialog-content">
            <div class="edit-wrapper">
                <ui5-label>Title:</ui5-label>
                <ui5-textarea class="title-textarea"
                  show-exceeded-text
                  max-length="24"
                  :value="todoBeingEdittedText"
                  ref="titleEditInput">
                </ui5-textarea>
            </div>

            <div class="edit-wrapper date-edit-fields">
                <ui5-label>Date:</ui5-label>
                <ui5-datepicker format-pattern="dd/MM/yyyy" :value="todoBeingEdittedDate" ref="dateEditInput"></ui5-datepicker>
            </div>
          </div>
            <ui5-toolbar class="dialog-footer" data-ui5-slot="footer">
              <ui5-button type="Transparent" @press="cancelEdits">Cancel</ui5-button>
              <ui5-button type="Emphasized" @press="saveEdits">Save</ui5-button>
            </ui5-toolbar>
        </ui5-dialog>
      </div>
</template>

<script>
import Vue from "vue";
import '@ui5/webcomponents/dist/Toolbar';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import './components/TodoList.vue';

let App = Vue.component("app", {
  data: function() {
    return {
      todos: [
        {
          text: "Get some carrots",
          id: "i1",
          deadline: "27/7/2018",
          done: false
        },
        {
          text: "Do some magic",
          id: "i2",
          deadline: "22/7/2018",
          done: false
        },
        {
          text: "Go to the gym",
          id: "i3",
          deadline: "24/7/2018",
          done: false
        },
        {
          text: "Buy milk",
          id: "i4",
          deadline: "30/7/2018",
          done: false
        }
      ],
      doneTodos: [
        {
          text: "Eat some fruits",
          id: "i5",
          deadline: "29/7/2018",
          done: true
        }
      ],
      todoBeingEdittedText: "",
      todoBeingEdittedDate: "",
      selectedEditTodo: ""
    };
  },
  methods: {
    handleAdd: function() {
      this.todos = [...this.todos, {
        text: this.$refs["todoInput"].value,
        id: this.todos.length + 1,
        deadline: this.$refs["todoDeadline"].value,
        done: false
      }];
    },
    handleDone(event) {
      const selectedItem = event.detail.items[0];
      const selectedId = selectedItem.getAttribute("data-key");

      const newlySelected = this.todos.filter(todo => {
        return selectedId === todo.id.toString();
      })[0];
      newlySelected.done = true;
      this.doneTodos.push(newlySelected);

      this.todos = this.todos.filter(todo => {
        return selectedId !== todo.id.toString();
      });
    },
    handleUndone(event) {
      const selectedItems = event.detail.items;
      const selectedIds = selectedItems.map(item => item.getAttribute("data-key"));

      const newlyDeselected = this.doneTodos.filter(todo => {
        return selectedIds.indexOf(todo.id.toString()) === -1;
      }).map(item => {
        return { ...item, done: false };
      });

      this.doneTodos = this.doneTodos.filter(todo => {
        return selectedIds.indexOf(todo.id.toString()) > -1;
      });

      this.todos = [...this.todos, ...newlyDeselected];
    },
    handleRemove(item) {
      const filteredTodos = this.todos.filter(todo => todo.id.toString() !== item.id);
      this.todos = filteredTodos;

      const filteredDoneTodos = this.doneTodos.filter(todo => todo.id.toString() !== item.id);
      this.doneTodos = filteredDoneTodos;
    },
    handleEdit(item) {
      const matchedTodos = this.todos.filter(todo => todo.id.toString() === item.id);
      let todoObj;

      if (matchedTodos.length) { 
        todoObj = matchedTodos[0];
      } else {
        todoObj = this.doneTodos.filter(todo => todo.id.toString() === item.id)[0];
      }

      this.todoBeingEdittedText = todoObj.text;
      this.todoBeingEdittedDate = todoObj.deadline;
      this.selectedEditTodo = todoObj.id;

      this.$refs["editDialog"].open();
    },
    saveEdits() {
      const edittedText = this.$refs["titleEditInput"].value;
      const edittedDate = this.$refs["dateEditInput"].value;

      this.todos = this.todos.map((todo) => {
        if (todo.id === this.selectedEditTodo) {
          todo.text = edittedText;
          todo.deadline = edittedDate;
        }

        return todo;
      });

      this.doneTodos = this.doneTodos.map((todo) => {
        if (todo.id === this.selectedEditTodo) {
          todo.text = edittedText;
          todo.deadline = edittedDate;
        }

        return todo;
      });

      this.$refs["editDialog"].close();
    },
    cancelEdits() {
      this.$refs["editDialog"].close();
    }
  }
});

export default App;
</script>

<style>
.app {
  height: 100%;
}

.header-toolbar {
  position:sticky;
  z-index: 42;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 5px -5px #0a6ed1;
}

.ui5-logo {
  height: 2rem;
  margin-left: 2rem;
}

.app-title {
  margin-left: 1rem;
}

.app-content {
  height: calc(100% - 3rem);
  padding: 0 1rem;
  width: calc(100% - 2rem);
}

.create-todo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #b3b3b3;
  box-sizing: border-box;
}

.auto-width {
  width: auto;
}

#add-input {
  flex: auto;
}

#date-picker {
  margin: 0 0.5rem;
}

.li-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.edit-btn {
  margin-right: 1rem;
}

.dialog-content {
  width: 320px;
  padding: 2rem 2rem;
}

.dialog-footer {
  padding: 0 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.title-textarea {
  height: 100px;
  display: inline-block;
  width: 100%;
}

.date-edit-fields {
  margin-top: 1rem;
}
</style>
