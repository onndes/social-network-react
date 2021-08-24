export default class GetDialogsService {
    constructor() {
        this.jsonPlaceholder = "https://jsonplaceholder.typicode.com";
    }

    async getData(url) {
        const resault = await fetch(`${this.jsonPlaceholder}${url}`);

        if (!resault.ok) {
            return new Error(`could not fatch ${url}, status ${resault.status}`);
        }

        return await resault.json();
    }

    getAllUsers = async () => {
        const resault = await this.getData("/users");
        return resault;
    };

    getAllComments = async (id) => {
        const resault = await this.getData(`/comments/${id}`);
        return this._transformComents(resault);
        // return resault;
    };

    separationBody(item) {
        const idx = item.split("\n");
        return idx;
    }

    _transformComents = (res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email, 
            body: this.separationBody(res.body),
        };
    };
}
