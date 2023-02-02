/**
 * Service HTTP
 */
export class HTTP {

    private href: string;

    public constructor() {
        this.href = window.location.href;
        console.log(window.location.href);
    }

    public getText(path: string, script: (data: any) => void): void {
        fetch(this.buildUrl(path)).then(data => data.text()).then((data: any) => {
            script(data);
        });
    }

    public getJson(path: string, script: (data: any) => void): void {
        fetch(this.buildUrl(path)).then(data => data.json()).then((data: any) => {
            script(data);
        });
    }

    private buildUrl(path: string): string {
        return this.href + path;
    }
}