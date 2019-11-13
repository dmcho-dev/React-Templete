import { ofType, combineEpics } from 'redux-observable';
import {
  map,
  mapTo,
  mergeMap,
  catchError,
  delay,
  takeUntil,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as sample from 'redux/actions/sample.action';
import * as sampleAPI from 'redux/apis/sample.api';

const postSampleTokenRequestEpic = action$ =>
  action$.pipe(
    ofType(sample.POST_SAMPLE_TOKEN_REQUEST),
    mergeMap(action =>
      sampleAPI.postSampleToken$().pipe(
        map(response => {
          console.log(`postSampleTokenRequestEpic `, response);
        }),
        // catchError(),
      ),
    ),
  );

export default combineEpics(postSampleTokenRequestEpic);
