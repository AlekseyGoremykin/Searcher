import { Component, OnInit } from '@angular/core';
import {Task} from "../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})



export class TasksPageComponent implements OnInit {

  tasks: Task[] = [];

  form: FormGroup;

  visibility = 'hidden';

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('',[
        Validators.required
      ]),
      interval: new FormControl('', [
        Validators.required,
        Validators.min(5),
        Validators.max(3600),
        Validators.pattern('[0-9]*')
      ])

    })
  }

  createTask() {
    if(this.visibility === 'hidden'){
      this.visibility = 'visible';
    }else {
      this.visibility = 'hidden';
    }
  }


  addTask() {
    const formData = this.form.value;

    this.tasks.push({title: formData.title, interval: formData.interval})
    this.form.reset({title: '', interval: ''});
  }
}
