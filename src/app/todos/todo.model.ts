import { stat } from 'fs';

export class Todo {
    public task: string;
    public description: string;
    public status: string;

    constructor(task: string, desc: string, status: string) {
        this.task = task;
        this.description = desc;
        this.status = status;
    }
}
