type PureObject = {
  [key: string]: string;
}

const createURL = (path: string, params: PureObject) => {
  let url = path;
  params && Object.keys(params).forEach((key, idx) => {
    if (idx === 0) url = url.concat(`?${key}=${params[key]}`);
    else url = url.concat(`&${key}=${params[key]}`);
  });

  return url;
}

export function post(url: string, body: PureObject) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json().then(data => {
    if (res.ok) return data;
    else throw data.reason;
  }));
}

export function get(url: string, params = {}) {
  return fetch(createURL(url, params), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json().then(data => {
    if (res.ok) return data;
    else throw data.reason;
  }));
}
