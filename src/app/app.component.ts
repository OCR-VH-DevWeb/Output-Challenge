import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onomatopoeia-app';
  onomatopeiaList: string[] = ['boo', 'aaaaarrrgghhhh', 'hihihi'];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopeiaList.push(newOnomatopia);
  }
}
