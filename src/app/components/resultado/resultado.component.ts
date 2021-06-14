import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.bmi > 25 ) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal al normal, intente hacer mas ejercicio';
    } else if(this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal, ¡Buen trabajo!';
    }else{
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal, intenta alimentarte un poco mas';
    }
  }

}
