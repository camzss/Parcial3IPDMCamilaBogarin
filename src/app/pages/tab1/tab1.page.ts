import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ListaClientes } from 'src/app/interfaces/ListaClientes';
import { MascotasService } from 'src/app/services/mascotas.service';
import { ListaVacunas } from 'src/app/interfaces/ListaVacunas';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaclientes: ListaClientes[] | undefined;
  selectedClienteId: string | undefined;
  selectedMascotaId: string | undefined;
  listaMascotas: any[] | undefined;
  listaVacunas: ListaVacunas[] | undefined;



  constructor(private clientesService: ClientesService, private mascotasService: MascotasService, private vacunasService: VacunasService) {}

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getClientes().subscribe(
      (resp: any) => {
        this.listaclientes = resp as ListaClientes[];
        console.log(resp);
      },
      (error: any) => {
        console.error(error);
      },
      () => {
        console.log('Consulta completada');
      }
    );
  }

  onClienteSelected() {
    if (this.selectedClienteId) {
      this.mascotasService.getMascotas(this.selectedClienteId).subscribe(
        (resp: any) => {
          this.listaMascotas = resp; // Asignar la lista de mascotas al arreglo correspondiente
          console.log(resp);
        },
        (error: any) => {
          console.error(error);
        },
        () => {
          console.log('Consulta de mascotas completada');
        }
      );
    } else {
      this.listaMascotas = []; // Vaciar la lista de mascotas si no se selecciona ningún cliente
    }
  }

  verHistorial() {
    if (this.selectedMascotaId) {
      this.vacunasService.getVacunas(this.selectedMascotaId).subscribe(
        (resp: any) => {
          this.listaVacunas = resp as ListaVacunas[]; // Utiliza 'as ListaVacunas[]' para realizar una conversión de tipo
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
  
  
}

