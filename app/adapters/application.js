import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// import DS from 'ember-data';
import ENV from '../config/environment';


export default ActiveModelAdapter.extend(DataAdapterMixin,{
  authorizer: "authorizer:devise",
  host: ENV.APP.API_HOST,
  namespace: "api/v1",
});
