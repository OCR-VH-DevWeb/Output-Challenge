import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss',
})
export class CreateOnomatopiaComponent {
  // chaîne de charactères qui contient l'onomatopée saisie par l'utilisateur dans le formulaire.
  newOnomatopia: string = '';

  // 'sendOnomatopiaToParent' cet EventEmitter permet de transmettre l'onomatopée créée au composant parent AppComponent.
  @Output() sendOnomatopiaToParent: EventEmitter<string> =
    new EventEmitter<string>();

  // createOnomatopia est appelée lors de la soumission du formulaire. Elle vérifie que l'onomatopée n'est pa svide puis émet celle-ci au composant parent, puis réinitialise le champ de saisie.
  createOnomatopia(): void {
    //avec la condition on vérifie que la chaîne de caractères "newOnomatopia" n'est pas vide ou composée uniquement d'espaces blancs avec la méthode trim ()
    if (this.newOnomatopia.trim()) {
      // si c'est le cas le bloc de code suivant est exécuté, déclenche l'événement "sendOnomatopiaToParent" et envoie la nouvelle onomatopée au composant parent.
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      // ici on réinitialise la propriété "newOnomatopia" à une chaîne vide, cela vide le champ de texte du formulaire et permet d'ajouter une nouvelle onomatopée.
      this.newOnomatopia = '';
    }
  }
}
