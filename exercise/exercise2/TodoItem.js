class TodoItem {
    constructor(title) {
        (this.title = title), (this.complete = false);
    }

    complete() {
        this.complete = true;
    }
}

export default TodoItem;
