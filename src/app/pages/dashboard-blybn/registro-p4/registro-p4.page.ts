import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registro-p4',
  templateUrl: './registro-p4.page.html',
  styleUrls: ['./registro-p4.page.scss'],
})
export class RegistroP4Page implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private storage: Storage,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  toast: any;

  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      mode: 'ios',
      message: '¿Esta seguro que desea cancelar el registro de la propiedad?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentActionCamera1() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera1();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery1();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 1');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto1: string;
  cameraData1: string;
  openCamera1() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData1 = imageData;
        this.foto1 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery1() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData1 = imageData;
        this.foto1 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera2() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera2();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery2();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 2');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto2: string;
  cameraData2: string;
  openCamera2() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData2 = imageData;
        this.foto2 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery2() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData2 = imageData;
        this.foto2 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera3() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera3();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery3();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 3');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto3: string;
  cameraData3: string;
  openCamera3() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData3 = imageData;
        this.foto3 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery3() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData3 = imageData;
        this.foto3 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera4() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera4();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery4();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 4');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto4: string;
  cameraData4: string;
  openCamera4() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData4 = imageData;
        this.foto4 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery4() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData4 = imageData;
        this.foto4 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera5() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera5();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery5();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 5');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto5: string;
  cameraData5: string;
  openCamera5() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData5 = imageData;
        this.foto5 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery5() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData5 = imageData;
        this.foto5 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera6() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera6();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery6();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 6');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto6: string;
  cameraData6: string;
  openCamera6() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData6 = imageData;
        this.foto6 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery6() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData6 = imageData;
        this.foto6 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera7() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera7();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery7();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 7');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto7: string;
  cameraData7: string;
  openCamera7() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData7 = imageData;
        this.foto7 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery7() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData7 = imageData;
        this.foto7 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }


  async presentActionCamera8() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Cámara',
      cssClass: 'match-item-action-sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Tomar Fotografía',
          icon: 'camera',
          cssClass: 'iconCamera',
          handler: () => {
            this.openCamera8();
          },
        },
        {
          text: 'Seleccionar Fotografía',
          icon: 'images',
          cssClass: 'iconGaleria',
          handler: () => {
            this.openGallery8();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCerrar',
          handler: () => {
            console.log('Cancel clicked 8');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  foto8: string;
  cameraData8: string;
  openCamera8() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData8 = imageData;
        this.foto8 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  openGallery8() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 1920,
      targetHeight: 1200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.cameraData8 = imageData;
        this.foto8 = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  informacionR4: any;
  guardarInformacion(){
    if(this.cameraData1 == undefined){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos 5 fotografias...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.cameraData2 == undefined){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos 5 fotografias...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.cameraData3 == undefined){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos 5 fotografias...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.cameraData4 == undefined){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos 5 fotografias...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else if (this.cameraData5 == undefined){
      this.toast = this.toastController.create({
        message: 'Debe seleccionar al menos 5 fotografias...',
        duration: 2000,
        mode: 'ios'
      }).then((toastData) => {
        toastData.present();
      });
    } else {
      this.informacionR4 = {
        foto1: this.cameraData1,
        foto2: this.cameraData2,
        foto3: this.cameraData3,
        foto4: this.cameraData4,
        foto5: this.cameraData5,
        foto6: this.cameraData6,
        foto7: this.cameraData7,
        foto8: this.cameraData8,
        registro4: true
      }
      this.storage.set('registroP4', this.informacionR4).then((res) => {
        this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
      });
    }     
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default.svg';
  }
  onError2(img2) {
    img2.src = '../../../../assets/imgs/default.svg';
  }
  onError3(img3) {
    img3.src = '../../../../assets/imgs/default.svg';
  }
  onError4(img4) {
    img4.src = '../../../../assets/imgs/default.svg';
  }
  onError5(img5) {
    img5.src = '../../../../assets/imgs/default.svg';
  }
  onError6(img6) {
    img6.src = '../../../../assets/imgs/default.svg';
  }
  onError7(img7) {
    img7.src = '../../../../assets/imgs/default.svg';
  }
  onError8(img8) {
    img8.src = '../../../../assets/imgs/default.svg';
  }
}
