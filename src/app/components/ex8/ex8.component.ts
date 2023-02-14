import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.component.html',
  styleUrls: ['./ex8.component.css'],
})
export class Ex8Component {
  listaTarefas: string[] = [];

  cadastrarTarefa(tarefa: HTMLInputElement): void {
    this.listaTarefas.push(tarefa.value);
    tarefa.value = '';
  }
}
