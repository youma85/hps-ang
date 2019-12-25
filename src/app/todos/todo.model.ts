import { Category } from '../categories/category.model';

export class Todo {
    public task: string;
    public description: string;
    public status: string;
    public category: Category;

    constructor(task?: string, desc?: string, category?: Category, status?: string) {
        this.task = task;
        this.description = desc;
        this.status = status;
        this.category = category;
    }
}
