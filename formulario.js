nome = document.getElementById('nome')
sobrenome = document.getElementById('sobrenome')
email = document.getElementById('email')
exp = document.getElementById('experiencia')
mensagem = document.getElementById('msg')

function send() {
    
    if (nome.value.length == 0 || sobrenome.value.length == 0 || email.value.length == 0 || exp.value.length == 0 
        || !document.getElementById('front').checked && !document.getElementById('back').checked && !document.getElementById('full').checked 
        || !document.getElementById('inc').checked && !document.getElementById('int').checked && !document.getElementById('avç').checked || !document.getElementById('py').checked && !document.getElementById('java').checked && !document.getElementById('js').checked && !document.getElementById('html').checked && !document.getElementById('css').checked && !document.getElementById('csharp').checked && !document.getElementById('php').checked) {

        window.alert('Campo(s) vazio(s)! Tente novamente...')
        
    } else {

        mensagem.innerHTML = `Tudo certo, ${nome.value}, o formulário já foi enviado ao RH e em breve entraremos em contato pelo seu e-mail fornecido.`

    }
    
}

function resetar() {

    document.getElementById('nome').value = ''
    document.getElementById('sobrenome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('experiencia').value = ''
    mensagem.innerHTML = ''
    
}
