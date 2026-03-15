import { Routes } from '@angular/router';
import { Addtask } from './addtask/addtask';
import { Showallnotes } from './showallnotes/showallnotes';
import { Edittask } from './edittask/edittask';

export const routes: Routes = [
    {path:'addtask',component:Addtask},
    {path:'showallnotes',component:Showallnotes},
    {path:'edittask',component:Edittask}
];
