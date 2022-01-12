import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Container,
  IOptions,
  Main,
  RecursivePartial,
  tsParticles,
} from 'tsparticles';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.first.nativeElement.style.display = 'block';
    }, 0);
    setTimeout(() => {
      this.second.nativeElement.style.display = 'block';
    }, 500);
    setTimeout(() => {
      this.third.nativeElement.style.display = 'block';
    }, 2500);
  }

  particlesOptions: RecursivePartial<IOptions> = {
    background: {
      color: {
        value: '#000000',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
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
        value: '#C32C2C',
      },
      links: {
        color: '#1AC4C4',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }
}
