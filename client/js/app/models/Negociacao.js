class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); // enviando um novo objeto baseado na data para que a data original não seria alterado
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); //impede o objeto de ser alterado
    }

    get data() {
        return new Date(this._data.getTime()); // enviando um novo objeto baseado na data para que a data original não seria alterado
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}