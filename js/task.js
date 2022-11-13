class Task {
    name
    constructor(name) {
        this.name = name;
        this.isFalse = false;
    }

    set name(new_name) {
        this.name = new_name;
    }

    get name() {
        return this.name;
    }

    taskComplete() {
        if (this.isFalse == false) {
            this.isFalse = true;
        } else {
            this.isFalse = false;
        }
    }
}

export default Task;