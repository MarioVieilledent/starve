// let href: string = window.location.href;
let href: string = "http://localhost:3000/";

export function getText(path: string, script: (data: any) => void): void {
  fetch(buildUrl(path))
    .then((data) => data.text())
    .then((data: any) => {
      script(data);
    });
}

export function getJson(path: string, script: (data: any) => void): void {
  fetch(buildUrl(path))
    .then((data) => data.json())
    .then((data: any) => {
      script(data);
    });
}

function buildUrl(path: string): string {
  return href + path;
}