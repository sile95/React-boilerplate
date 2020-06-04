import * as service from '@core/src/api/services';

export const getExampleService = (data) => service.get('/', data);
