import { Component, Input } from '@angular/core';
import { AppointmentDataService } from '../../appointment-data.service';
import { Appointment } from '../../appointment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() atendimentoID: string = '';
  atendimento: Appointment = {} as Appointment;

  constructor(private dataService: AppointmentDataService) { }
  
  ngOnInit() {
    this.dataService.getAtendimento(this.atendimentoID).subscribe(
      {
        next: (response) => {
          this.atendimento = response;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
  
}
