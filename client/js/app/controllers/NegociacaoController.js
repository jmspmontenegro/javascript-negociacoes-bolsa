class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //o bind mantém o método querySelect dentro da instancia do document

        this._inputData = $('#data');
        this._inputData.focus();
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new BindHelper(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona',
            'esvazia'
        );

        this._mensagem = new BindHelper(
            new Mensagem(),
            new MensagensView($('#mensagensView')),
            'texto'
        );
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso.';

        this._limpaFormulario();
    }

    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Lista esvaziada.';
    }

    importaNegociacoes() {

        let service = new NegociacaoService();

        Promise.all([
                service.obterNegociacaoDaSemana(),
                service.obterNegociacaoDaSemanaAnterior(),
                service.obterNegociacaoDaSemanaRetrasada()
            ]).then(negociacoes => {
                negociacoes
                    .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                    .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = ''

        this._inputData.focus();
    }
}