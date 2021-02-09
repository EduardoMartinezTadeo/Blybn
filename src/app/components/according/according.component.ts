import {
  Input,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: 'app-according',
  templateUrl: './according.component.html',
  styleUrls: ['./according.component.scss'],
})
export class AccordingComponent implements OnInit {

  @ViewChild("expandWrapper", { read: ElementRef, static: true })
  expandWrapper: ElementRef;

  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "600px";

  icon: string = "chevron-forward-outline";
  accordionExapanded = false;
  @Input("title") title: string;
  @Input("names") names: string;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.expandWrapper.nativeElement,
      "max-height",
      this.expandHeight
    );
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "0px 16px"
      );
    } else {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "600px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "13px 16px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon =
      this.icon == "chevron-down-outline"
        ? "chevron-forward-outline"
        : "chevron-down-outline";
  }
}
