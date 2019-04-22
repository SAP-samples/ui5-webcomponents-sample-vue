<template>
  <div class="app">
    <header class="app-header">
      <ui5-shellbar primary-title="UI5 Web Components Vue Sample Application" :logo="logo"
      ></ui5-shellbar>
    </header>
    <section class="app-content">
      <div class="create-todo-wrapper">
        <ui5-input
          :value="newTodo.text"
          @input="newTodo.text = $event.target.value"
          class="add-todo-element-width"
          id="add-input"
          placeholder="My Todo…"
        ></ui5-input>
        <ui5-datepicker
          :value="newTodo.deadline"
          @change="newTodo.deadline = $event.target.value"
          class="add-todo-element-width"
          format-pattern="dd/MM/yyyy"
          id="date-picker"
        ></ui5-datepicker>
        <ui5-button class="add-todo-element-width" type="Emphasized" @press="handleAdd">Add Todo</ui5-button>
      </div>

      <div class="list-todos-wrapper">
        <TodoList :todos="todos" @selectionchange="$event.done = true">
          <template #todo="{todo}">
            <TodoItem
              :todo="todo"
              @delete="handleRemove(todo)"
              @edit="handleEdit(todo)"
            />
          </template>
        </TodoList>

        <ui5-panel header-text="Completed Tasks">
          <TodoList :todos="doneTodos" @selectionchange="$event.done = false">
            <template #todo="{todo}">
              <TodoItem
                :todo="todo"
                @delete="handleRemove(todo)"
                @edit="handleEdit(todo)"
              />
            </template>
          </TodoList>
        </ui5-panel>
      </div>
    </section>
    <ui5-dialog header-text="Edit Todo Item" ref="editDialog">
      <div class="dialog-content">
        <div class="edit-wrapper">
          <ui5-label>Title:</ui5-label>
          <ui5-textarea
            class="title-textarea"
            show-exceeded-text
            max-length="24"
            :value="todoBeingEdited.text"
            @input="todoBeingEdited.text = $event.target.value"
            ref="titleEditInput"
          ></ui5-textarea>
        </div>

        <div class="edit-wrapper date-edit-fields">
          <ui5-label>Date:</ui5-label>
          <ui5-datepicker
            format-pattern="dd/MM/yyyy"
            :value="todoBeingEdited.deadline"
            @input="todoBeingEdited.deadline = $event.target.value"
            ref="dateEditInput"
          ></ui5-datepicker>
        </div>
      </div>
      <div class="dialog-footer" data-ui5-slot="footer">
        <ui5-button type="Transparent" @press="cancelEdits">Cancel</ui5-button>
        <ui5-button type="Emphasized" @press="saveEdits">Save</ui5-button>
      </div>
    </ui5-dialog>
  </div>
</template>

<script>
import logo from './assets/logo.png';
import '@ui5/webcomponents/dist/ShellBar';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: { TodoItem, TodoList },
  computed: {
    doneTodos() {
      return this.allTodos.filter(({ done }) => done === true);
    },
    todos() {
      return this.allTodos.filter(({ done }) => done === false);
    }
  },
  data() {
    return {
      newTodo: {
        text: "",
        deadline: null
      },
      todoBeingEdited: {
        id: null,
        text: null,
        deadline: null,
        done: null
      },
      allTodos: [
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
        },
        {
          text: "Eat some fruits",
          id: "i5",
          deadline: "29/7/2018",
          done: true
        }
      ],
      logo
    };
  },
  methods: {
    handleAdd() {
      const id = this.todos.length + 1;
      this.allTodos = [...this.todos, {
        id,
        done: false,
        ...this.newTodo
      }];
      this.newTodo = {
        text: "",
        deadline: null
      };
    },
    handleRemove(todo) {
      this.allTodos = this.allTodos.filter(({ id }) => todo.id !== id);
    },
    handleEdit(todo) {
      this.todoBeingEdited = { ...todo };
      this.$refs["editDialog"].open();
    },
    saveEdits() {
      const todoIndex = this.allTodos.findIndex(({ id }) => id === this.todoBeingEdited.id);
      this.$set(this.allTodos, todoIndex, {...this.todoBeingEdited});
      this.$refs["editDialog"].close();
    },
    cancelEdits() {
      this.$refs["editDialog"].close();
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

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

.add-todo-element-width {
  width: auto;
}

#add-input {
  flex: auto;
}

#date-picker {
  margin: 0 0.5rem 0 0.5rem;
}

.li-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.li-content-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.edit-btn {
  margin-right: 1rem;
}

.dialog-content {
  max-width: 320px;
  padding: 2rem 2rem;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0.25rem 0.25rem 0.25rem;
  border-top: 1px solid #d9d9d9;
}

.title-textarea {
  height: 100px;
  display: inline-block;
  width: 100%;
}

.date-edit-fields {
  margin-top: 1rem;
}

@media(max-width: 600px) {
    .create-todo-wrapper {
        flex-direction: column;
    }

     .add-todo-element-width  {
        width: 100%;
    }

     #date-picker {
        margin: 0.5rem 0 0.5rem 0;
    }
}
</style>
