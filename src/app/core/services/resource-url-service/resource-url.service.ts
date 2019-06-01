import { environment } from '../../../../environments/environment';
import { HttpVerbs } from '../../../config/enums/http-verbs.enum';
import { Endpoint } from '../../../config/models/endpoint.model';
import { Environment } from '../../../config/models/environment.model';
// import { ResourceConfig } from '../../../config/models/resource-config.model';
import resourceConfig from '../../../config/resource-endpoints.json';

export class ResourceUrlService {
  private endpointConfig;
  private resourceDefaultVersionName = 'default';

  // Remarks: For unit testing ONLY
  public set config(config: string) {
    this.endpointConfig = JSON.parse(config);
  }

  public resourceUrl(resource: string, verb: HttpVerbs): string {
    try {
      const runningEnvironment = resourceConfig.environments.find((x) => x.name === environment.resourceEnvironment) as Environment;
      const endpointConfig = runningEnvironment.endpoints.find((x) => x.resource === resource) as Endpoint;
      const endpointVersion = endpointConfig.versions.find((x) => x.verb.toLowerCase() === verb.toLowerCase())
        || endpointConfig.versions.find((x) => x.verb.toLowerCase() === this.resourceDefaultVersionName);

      return `${endpointConfig.baseUrl}/${endpointVersion.value}/${endpointConfig.url}`;
    } catch (exception) {
      // TODO: Log a configuration mismatch error.
      return undefined;
    }
  }
}
