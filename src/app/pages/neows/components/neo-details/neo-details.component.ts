import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NeowsService } from '../../services/neows.service';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { NEO_LOOKUP } from '../../interfaces/NEO_LOOKUP.interface';
import { OrbitalDataColumns } from '../helper/OrbitalData';
import { CloseApproachDataColumns } from '../helper/CloseApproachData';

@Component({
  selector: 'app-neo-details',
  templateUrl: './neo-details.component.html',
  styleUrls: ['./neo-details.component.scss'],
})
export class NeoDetailsComponent implements OnInit, OnDestroy {
  private neowsService = inject(NeowsService);
  private route = inject(ActivatedRoute);
  private subscription: Subscription;

  public neoLookup: NEO_LOOKUP;
  public isLoading: boolean = true;
  public orbitalDataColumns = OrbitalDataColumns;
  public closeApproachDataColumns = CloseApproachDataColumns;

  currentPage: number = 1;
  itemsPerPage: number = 5;

  ngOnInit(): void {
    const neo_reference_id = this.route.snapshot.paramMap.get('id');
    if (neo_reference_id)
      this.subscription = this.neowsService.getNEO_LookUp(neo_reference_id).subscribe((a) => {
        this.neoLookup = a;
        this.isLoading = false;
        console.log(a);
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  get totalPages(): number {
    return Math.ceil(this.neoLookup.close_approach_data.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.neoLookup.close_approach_data.slice(startIndex, endIndex);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

}
