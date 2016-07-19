import { Http, Response, URLSearchParams } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { MDCRequest } from './mdc-request'
import {BehaviorSubject} from 'rxjs/Rx'

@Injectable()
export class PdfsService {

constructor(private http:Http){};

	_getFiles(params: any){
		//const BASE_URL = 'http://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?';

		const BASE_URL = 'http://s0144035/migr/main/Production/mayor/WORKAREA/wa1/mayor/searchApp/searchHandler.ashx?';

		let options = new URLSearchParams();


		options.set('folder', params.folder);
		options.set('year', params.year);
		options.set('month', params.month);

		try{

return this.http.get(BASE_URL, {search: options}).map((res: Response) => res.json()).catch(this.handleError);

		} catch(e){

			console.log("error: ", e);
		}
		
	}

	getFiles(params: any){

		//console.log('params are: ', params);

		let behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(this._getFiles(params));

		return behaviorSubject;
	}

	private handleError (error: any){
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}
