class MensagensView extends View {

    template(model) {
        return model.texto ? `<p class="alert alert-success">${model.texto}</p>` : `<p></p>`;
    }
}