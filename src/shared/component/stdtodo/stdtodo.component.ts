import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Itodos } from "src/models/todo";


@Component({
    selector: "app-stdtodo",
    templateUrl: "stdtodo.component.html",
    styleUrls: ["stdtodo.component.scss"]
})



export class stdtodocomponent implements OnInit {
    todoArray: Array<Itodos> = [
        {
            todoItem: 'HTML 5',
            todoId: '1'
        }
    ]

    @ViewChild('todoItem') todoItem !: ElementRef;
    constructor() { }

    ngOnInit(): void {

    }

    generateUuid() {
        return (
            String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
        ).replace(/[xy]/g, (character) => {
            const random = (Math.random() * 16) | 0;
            const value = character === "x" ? random : (random & 0x3) | 0x8;

            return value.toString(16);
        });

    }

    onTodoAdd() {
        let newTodo: Itodos = {
            todoItem: this.todoItem.nativeElement.value,
            todoId: this.generateUuid()
        }
        this.todoItem.nativeElement.value = '';
        this.todoArray.push(newTodo);

    }

}