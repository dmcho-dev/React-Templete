import { combineEpics } from 'redux-observable';

import sampleEpic from './sample.epic';

export default combineEpics(sampleEpic);
