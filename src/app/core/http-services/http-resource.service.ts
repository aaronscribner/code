import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResourceUrlService } from '../services/resource-url-service/resource-url.service';
import { HttpVerb } from '../../config/enums/http-verbs.enum';
import { Resource } from '../../shared/models/resource.model';

export class HttpResourceService<T extends Resource> {
  constructor(
      private resourceName: string,
      private httpClient: HttpClient,
      private resourceUrlService: ResourceUrlService)  {
  }

  public list(): Observable<T[]> {
    const uri = this.resourceUrlService.resourceUrl(this.resourceName, HttpVerb.GET);
    return this.httpClient.get<T[]>(uri);
  }

  public create(item: T): Observable<T> {
    const uri = this.resourceUrlService.resourceUrl(this.resourceName, HttpVerb.POST);
    return this.httpClient.post<T>(uri, item);
  }

  public read(id: number | string): Observable<T> {
    const uri = this.resourceUrlService.resourceUrl(this.resourceName, HttpVerb.GET);
    return this.httpClient.get<T>(`${uri}/${id}`);
  }

  public update(item: T): Observable<T> {
    const uri = this.resourceUrlService.resourceUrl(this.resourceName, HttpVerb.PUT);
    return this.httpClient.put<T>(`${uri}/${item.id}`, item);
  }

  public delete(id: number | string): Observable<object> {
    const uri = this.resourceUrlService.resourceUrl(this.resourceName, HttpVerb.DELETE);
    return this.httpClient.delete(`${uri}/${id}`);
  }
}
