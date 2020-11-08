import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit, OnDestroy {
  readonly unsubscribe: Subject<boolean> = new Subject();
  constructor(private progService: ProgramService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      params ? this.reloadParams = params: null;
    })
   }
  readonly filterYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  readonly dual = [true, false];
  programs = [];
  selYear: number;
  selLaunch: number;
  selLanding: number;
  queryParam: Object = {};
  reloadParams: Object = {};
  loading = false;

  ngOnInit(): void {
    this.getPrograms(this.reloadParams);
  }

  getPrograms(params) {
    this.loading = true;
    this.progService.getPrograms(params).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      this.programs = res;
      this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: this.queryParam, queryParamsHandling: 'merge' });
      this.loading = false;
    })
  }

  filter(type: string, value: any, i: number) {

    switch (type) {
      case "launch_year": this.selYear = i;
        this.queryParam['launch_year'] = value;
        break;

      case "launch_success": this.selLaunch = i;
        this.queryParam['launch_success'] = value;
        break;
      case "land_success": this.selLanding = i;
        this.queryParam['land_success'] = value;
        break;
    }
    this.getPrograms(this.queryParam);
  }

  ngOnDestroy() {
    this.unsubscribe.next(true)
    this.unsubscribe.complete();
  }
}
