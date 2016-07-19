import {Component} from '@angular/core'
import {SearchBoxComponent} from './search-box'
import {FileListComponent} from './file-list'
import {HTTP_PROVIDERS, URLSearchParams} from '@angular/http'
import { PdfsService } from './pdfs.service'
import {YearSelectorComponent} from './year-selector'
import {MonthSelectorComponent} from './month-selector'
import {ResetButtonComponent} from './reset-button'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'


@Component({
  moduleId: module.id,
  selector: 'mayor-pdf-search-app',
  directives: [YearSelectorComponent, MonthSelectorComponent, SearchBoxComponent, ResetButtonComponent, FileListComponent, ROUTER_DIRECTIVES],
  templateUrl: 'mayor-pdf-search.component.html',
  styleUrls: ['mayor-pdf-search.component.css'],
  providers: [HTTP_PROVIDERS, PdfsService]
})


export class MayorPdfSearchAppComponent {

	public files:any;
	public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	private sub: any;
	private params:any;

	private folder:any;
	private year: any;
	private month: any;

	constructor(private pdfService: PdfsService, private router: Router){}

	ngOnInit(){

		this.sub = this.router
			.routerState
			.queryParams
			.subscribe(params => {
				this.folder = params['folder'] !== undefined ? params['folder'] : 'remarks';
				this.year = ['year'] !== undefined ? params['year'] : "";
				this.month = ['month'] !== undefined ? params['month'] : "";

				this.files = this.pdfService.getFiles(params).getValue();
			});


	}

}
