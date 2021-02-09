import { ModalController } from '@ionic/angular';
import { Modal3Page } from '../../Modals/modal3/modal3.page';
import {
  Input,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: 'app-according03',
  templateUrl: './according03.component.html',
  styleUrls: ['./according03.component.scss'],
})
export class According03Component implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true })
  expandWrapper: ElementRef;

  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "600px";

  icon: string = "chevron-forward-outline";
  accordionExapanded = false;
  @Input("title") title: string;
  @Input("names") names: string;

  constructor(public renderer: Renderer2,  private modalCtrl: ModalController) { }

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

  async openModal3() {
    const presentModel = await this.modalCtrl.create({
      component: Modal3Page,
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
      //custom code
    });
    
    return await presentModel.present();
  }

}
