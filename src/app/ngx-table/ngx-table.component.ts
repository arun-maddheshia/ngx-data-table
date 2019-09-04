import {
  Component,
  OnInit
} from '@angular/core';
import {
  OverWatchAgent,
  AGENTS_DATA,
  FilterData
} from './assets/overwatch.agent';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements OnInit {

  rows: OverWatchAgent[];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  filterItem = FilterData;
  
  columns = [{
      prop: 'position',
      name: 'position',
      sortable: true,
      filterTye: 'select'
    },
    {
      prop: 'firstName',
      name: 'First Name',
      sortable: false
    },
    {
      prop: 'lastName',
      name: 'Last Name',
      sortable: false
    },
    {
      prop: 'username',
      name: 'User Name',
      sortable: false
    },
    {
      prop: 'status',
      name: 'status',
      sortable: false
    },
  ];

  constructor() {
    this.rows = AGENTS_DATA
  }

  ngOnInit() {}

  handleUpdate(e) {
    console.log(e);
    this.rows.splice(1,3)
  }

}
