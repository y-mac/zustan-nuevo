export interface Task{
    id:string;
    title:string;
    status:taskStatus;
}

export type taskStatus = "open" | "in-progress" | "done";
