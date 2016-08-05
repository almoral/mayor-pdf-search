import { Http, Response } from '@angular/http'
import { Injectable, Output } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { MDCRequest } from './mdc-request'
import {BehaviorSubject} from 'rxjs/Rx'

@Injectable()
export class PdfsService {

@Output() isHidden:boolean;

constructor(private http:Http){};

	_getFiles(options: MDCRequest){

		let opts = options;
		let url: string = opts.url;
		let target: string = opts.targetFolder == '' ? opts.targetFolder : 'folder=' + opts.targetFolder;
		let year: string = opts.targetYear;
		let month: string = opts.targetMonth;

		return this.http.get(url + target + '&year=' + year + '&month=' + month).map((res: Response) => res.json()).catch(this.handleError);
	}

	getFiles(opts: MDCRequest){

		let behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(this._getFiles(opts));

		return behaviorSubject;
	}



	private handleError (error: any){
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}
