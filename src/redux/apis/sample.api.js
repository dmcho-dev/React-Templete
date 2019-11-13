import { GET } from 'utils/async/rxAjax';

export const postSampleToken$ = () => GET(`/oauth/token`, {});
