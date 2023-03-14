import reducer from '../../reducer';

test('reducer', () => {
  let state;
  state = reducer(undefined, {});
  expect(state).toEqual({detail:{},recipes:[],filter:false,diets:[],error:{},success:{},search:false,order:false});
});