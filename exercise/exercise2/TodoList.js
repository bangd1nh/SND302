class TodoList {
    constructor() {
        this.item = [];
    }
    addItem(item) {
        this.item.push(item);
    }
    getItemTitles() {
        return this.item.map((item) => item.title);
    }
    displayItemsWithStatus() {
        this.item.forEach((item, index) => {
            console.log(
                `${index + 1}. [${item.completed ? "X" : " "}] ${item.title}`
            );
        });
    }

    completeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].complete();
        }
    }
}

export default TodoList;
