import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Musico } from '../../models/musico';

@Component({
  selector: 'app-musicos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './musicos.component.html',
  styleUrl: './musicos.component.css'
})
export class MusicosComponent {
  nomeDoMusico: string = "";
  
  musicos: Musico[] = [
    {
      "username":"Portas"
    },
    {
      "username":"Robz"
    },
    {
      "username":"Beca"
    },
    {
      "username":"Paulo"
    }
  ]

  createMusico() {
    this.musicos.push({'username':this.nomeDoMusico})
    this.nomeDoMusico = ""
  }

  deletaMusico(username: string) {
    this.musicos.forEach((musico, index)=> {
      if (musico.username == username)
        this.musicos.splice(index, 1);
    })
  }

  atualizaMusico(e: Event, m: Musico) {
    let inputElement = (<HTMLTextAreaElement>e.target)!
    m.username = inputElement.value;
    inputElement.value = "";
  }

}
