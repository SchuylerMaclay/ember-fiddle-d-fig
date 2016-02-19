import ActiveModelAdapter from 'active-model-adapter';
export default ActiveModelAdapter.extend({
  namespace: "api/v1",
  host: "https://secure-fjord-51899.herokuapp.com"
});
