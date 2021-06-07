import { ModalController } from '@ionic/angular';
import { Modal2Page } from '../../Modals/modal2/modal2.page';
import {
  Input,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: 'app-according02',
  templateUrl: './according02.component.html',
  styleUrls: ['./according02.component.scss'],
})
export class According02Component implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true })
  expandWrapper: ElementRef;

  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "650px";

  icon: string = "chevron-forward-outline";
  accordionExapanded = false;
  @Input("title") title: string;
  @Input("names") names: string;

  constructor(public renderer: Renderer2, private modalCtrl: ModalController) { }

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
        "650px"
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

  async openModal2() {
    const presentModel = await this.modalCtrl.create({
      component: Modal2Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
    });
    
    return await presentModel.present();
  }
}
