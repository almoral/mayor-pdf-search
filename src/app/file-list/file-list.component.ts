import { Component, Input } from '@angular/core';
import {Search} from '../search.pipe'
import {FixUrl} from '../fix-url.pipe'
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';


@Component({
  moduleId: module.id,
  selector: 'app-file-list',
  directives: [PaginationControlsCmp],
  pipes: [Search, FixUrl, PaginatePipe],
  providers: [PaginationService],
  templateUrl: 'file-list.component.html',
  styleUrls: ['file-list.component.css']
})
export class FileListComponent {


	@Input() term:string;

	@Input() selectedYear: string;

	@Input() selectedMonth: string;

	@Input() fileList: any;

  constructor() {

    console.log('month is: ', this.selectedMonth)
  }


}
