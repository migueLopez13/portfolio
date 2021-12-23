import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit, OnInit {
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  ctx!: CanvasRenderingContext2D;
  rect!: DOMRect;
  x = 0;
  y = 0;
  painting = false;

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

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.rect = this.canvas.nativeElement.getBoundingClientRect();
    this.listenerMouseEnter();
    this.listenerMouseMove();
    this.listenerMouseOut();
  }

  public listenerMouseEnter() {
    this.canvas.nativeElement.addEventListener(
      'mouseenter',
      (e: MouseEvent) => {
        this.x = e.clientX - this.rect.left;
        this.y = e.clientY - this.rect.top;
        this.painting = true;
      }
    );
  }

  public listenerMouseMove() {
    this.canvas.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.painting) {
        let xf = e.clientX - this.rect.left;
        let yf = e.clientY - this.rect.top;

        this.paint(this.x, this.y, xf, yf);

        this.x = xf;
        this.y = yf;
      }
    });
  }

  public listenerMouseOut() {
    this.canvas.nativeElement.addEventListener('mouseout', (e: MouseEvent) => {
      this.painting = false;
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    });
  }

  public paint(xi: number, yi: number, xf: number, yf: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#0bc9cd';
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(xi, yi);
    this.ctx.lineTo(xf, yf);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
