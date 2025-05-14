import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../service/real-estate.service';
import { Agent } from '../../models';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-agent-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  agents: Agent[] = [];
  loading = true;
  error: string | null = null;

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstateService.getAllAgents().subscribe({
      next: (response) => {
        if (response.result) {
          this.agents = response.data;  // Access the data array
        } else {
          this.error = 'Failed to load agents.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'An error occurred while fetching agents.';
        this.loading = false;
      }
    });
  }
}
