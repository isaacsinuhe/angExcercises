import { OnInit, HostListener, AfterViewInit, OnChanges, Input, Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightOver]'
})
export class OverflowHighlightDirective implements OnInit {
  @Input() highlightOver
  private target
  private config
  private inputIndex

  constructor(private el: ElementRef) {
    this.target = el.nativeElement
  }

  ngOnInit () {
    this.config = this.highlightOver
  }

  @HostListener('keydown', ['$event']) onkeydown ({which}) {
    const index = this.target.selectionEnd
    window.getSelection().removeAllRanges()
    
    this.target.focus();
    this.target.setSelectionRange(this.inputIndex, this.inputIndex);
  }

  @HostListener('input', ['$event']) oninput ({which}) {
    const target = this.target, config = this.config
    target.focus()
    target.selectionStart = config.max
    this.inputIndex = target.selectionEnd = target.value.length
  }

  @HostListener('click', ['$event']) onclick ({which}) {
    const target = this.target, config = this.config
    this.inputIndex = this.target.selectionStart

    this.target.focus();
    this.target.setSelectionRange(this.inputIndex, this.inputIndex);
  }
}
