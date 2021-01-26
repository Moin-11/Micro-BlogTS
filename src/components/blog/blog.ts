import {IBlog} from "./Iblog"

export class Blog implements IBlog{

    id: Number;
    title: string;
    body: string;
    author: string;

    constructor(Id: Number, Title: string, Body: string, Author: string) {
        this.id = Id;
        this.author = Author;
        this.body = Body;
        this.title = Title;


}
}