import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { 
  MoveDirection, 
  OutMode, 
  Container, 
  Engine 
} from "@tsparticles/engine";
import { loadSlim } from "tsparticles-slim"; // Fixed import path
import { NgParticlesModule } from "ng-particles"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toast, CommonModule, NgParticlesModule], // Added CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  
  // Particle configuration - using string literals instead of enums
  particlesOptions = {
    background: {
      color: "#f1f5f9 ",
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Using string literal instead of ClickMode
        },
        onHover: {
          enable: true,
          mode: "repulse", // Using string literal instead of HoverMode
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#7B7971",
      },
      links: {
        color: "#7B7971",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none, // This enum is still valid
        enable: true,
        outModes: {
          default: OutMode.bounce, // This enum is still valid
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  // Initialize particles
  async particlesInit(engine: any): Promise<void> {
    await loadSlim(engine);
  }

  // Handle particles loaded event
  particlesLoaded(container: any): void {
    console.log('Particles loaded', container);
  }
}