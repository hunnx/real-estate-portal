import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../service/real-estate.service';
import { Agent } from '../../models';

@Component({
  selector: 'app-agent-list',
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
      next: (data) => {
        this.agents = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load agents';
        this.loading = false;
      }
    });
  }
}
