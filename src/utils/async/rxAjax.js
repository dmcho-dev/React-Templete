import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const ajaxConfig = (method, url, body, option, error) => {
  const settings = {
    method,
    url: process.env.REACT_APP_API_URL + url,
    withCredentials: true,
    crossDomain: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      ...option,
    },
    body,
  };
  return ajax(settings).pipe(map(data => data.response));
};

const privateOption = () => {
  return {};
};

export const GET = (url, error) =>
  ajaxConfig('GET', url, null, privateOption(), error);
export const POST = (url, body, option) =>
  ajaxConfig('POST', url, body, { ...privateOption(), ...option });
export const PUT = (url, body) => ajaxConfig('PUT', url, body, privateOption());
export const PATCH = (url, body) =>
  ajaxConfig('PATCH', url, body, privateOption());
export const DELETE = (url, body) =>
  ajaxConfig('DELETE', url, body, privateOption());
