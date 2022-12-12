import { JSONSchema7 } from 'json-schema';
import { SingletonResource } from 'api/resources/Base/Singleton';

// https://github.com/rjsf-team/react-jsonschema-form/issues/2006
// https://levelup.gitconnected.com/using-crud-operations-with-react-swr-for-mutating-rest-api-cache-3e0d01774aed

export class OpenAPIResource extends SingletonResource {
  components: JSONSchema7 = {};
  static urlRoot = 'openapi.json';
}
