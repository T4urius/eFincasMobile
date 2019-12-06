import { Component, ViewChild, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-expandable-component',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {

  @ViewChild('expandWrapper', { read: ElementRef, static: false }) expandWrapper: ElementRef;
  @Input('expanded') expanded: boolean = false;
  @Input('expandHeight') expandHeight: string = '150px';

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

}
