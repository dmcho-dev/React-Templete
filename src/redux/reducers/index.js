import sampleReducer, { initialState as sampleState } from './sample.reducer';
const initialState = {
  sample: sampleState,
};

export default (state = initialState, action) => ({
  sample: sampleReducer(state.sample, action),
});
