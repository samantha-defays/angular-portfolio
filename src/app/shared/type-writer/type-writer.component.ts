import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  template: '<span class="typewrite"><span #typewriterElement></span></span>',
  standalone: true,
  styles: [`
    .typewrite > span {
      border-right: 0.08em solid #fff;
      animation: blink-caret 0.75s step-end infinite;
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #fff; }
    }
  `]
})
export class TypeWriterComponent implements AfterViewInit, OnDestroy {
  @Input() dataType: string[] = [];
  @Input() dataPeriod: number = 2000;

  @ViewChild('typewriterElement', { static: true }) typewriterElement!: ElementRef;

  private element!: HTMLElement;
  private loopNum = 0;
  private txt = '';
  private isDeleting = false;
  private timeoutId: any;

  ngAfterViewInit() {
    if (this.dataType.length > 0) {
      this.element = this.typewriterElement.nativeElement;
      this.tick();
    }
  }

  private tick() {
    const i = this.loopNum % this.dataType.length;
    const fullTxt = this.dataType[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerText = this.txt;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.dataPeriod;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.timeoutId = setTimeout(() => this.tick(), delta);
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
