import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  
  musicos = [
    {
      'username':'porras'
    }
  ]

  createMusico() {
    this.musicos.push({'username':this.nomeDoMusico})

  }

  deletaMusico(username: string) {
    this.musicos.forEach((musico, index)=> {
      if (musico.username == username)
        this.musicos.splice(index, 1);
    })
  }
}
