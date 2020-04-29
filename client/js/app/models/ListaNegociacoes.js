class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    get negociacoes() {
        /*
         ao criar um novo array concatenando a lista, retorna um novo objeto array evitando
         que a lista possa ser alterada sem usar os métodos dessa classe.
         Desenvolvimento Defensivo: Entregue uma cópia, nunca o original
        */
        return [].concat(this._negociacoes);

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvazia() {
        this._negociacoes = [];
    }



}