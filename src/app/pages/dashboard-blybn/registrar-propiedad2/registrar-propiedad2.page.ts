import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-propiedad2',
  templateUrl: './registrar-propiedad2.page.html',
  styleUrls: ['./registrar-propiedad2.page.scss'],
})
export class RegistrarPropiedad2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registro1: boolean = false;
  registro2: boolean = false;
  registro3: boolean = false;
  registro4: boolean = false;
  registro5: boolean = false;
  registro6: boolean = false;
  registro7: boolean = false;
  registro8: boolean = false;
  registro9: boolean = false;
  registro10: boolean = false;
  registro11: boolean = false;

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }

  registrop1(){
    this.registro1 = !this.registro1;
    this.router.navigate(['/animacion1']);
  }

  registrop2(){
    this.registro2 = !this.registro2;
    this.router.navigate(['/animacion2']);
  }

  registrop3(){
    this.registro3 = !this.registro3;
    this.router.navigate(['/animacion3']);
  }

  registrop4(){
    this.registro4 = !this.registro4;
    this.router.navigate(['/animacion4']);
  }

  registrop5(){
    this.registro5 = !this.registro5;
    this.router.navigate(['/animacion5']);
  }

  registrop6(){
    this.registro6 = !this.registro6;
    this.router.navigate(['/animacion6']);
  }

  registrop7(){
    this.registro7 = !this.registro7;
    this.router.navigate(['/animacion7']);
  }
  
  registrop8(){
    this.registro8 = !this.registro8;
    this.router.navigate(['/animacion8']);
  }

  registrop9(){
    this.registro9 = !this.registro9;
    this.router.navigate(['/animacion9']);
  }

  registrop10(){
    this.registro10 = !this.registro10;
    this.router.navigate(['/animacion10']);
  }

  registrop11(){
    this.registro11 = !this.registro11;
    this.router.navigate(['/animacion11']);
  }
}
