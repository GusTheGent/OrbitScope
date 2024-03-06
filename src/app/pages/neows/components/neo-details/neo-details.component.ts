import { Component, OnInit, inject } from '@angular/core';
import { NeowsService } from '../../services/neows.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NEO_LOOKUP } from '../../interfaces/NEO_LOOKUP.interface';

@Component({
  selector: 'app-neo-details',
  templateUrl: './neo-details.component.html',
  styleUrls: ['./neo-details.component.scss'],
})
export class NeoDetailsComponent implements OnInit {
  private neowsService = inject(NeowsService);
  private route = inject(ActivatedRoute);

  public neoLookup$: Observable<NEO_LOOKUP>;

  ngOnInit(): void {
    const neo_reference_id = this.route.snapshot.paramMap.get('id');
    if (neo_reference_id)
      // this.neoLookup$ = this.neowsService.getNEO_LookUp(neo_reference_id);
      this.neowsService.getNEO_LookUp(neo_reference_id).subscribe((a) => {
        console.log(a);
      });
  }
}
