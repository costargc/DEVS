# Criando um Repositório no github e fazendo o login por SSH

1. Agora que você criou um arquivo dentro da pasta vamos tentar mandar fazer o upload de volta para o github para isto faça:
* `git add .` (para dizer ao git o que você quer fazer)
* `git commit -m "nova release"` (para fazer o commit)
* `git push` (para fazer o upload das mudanças)

<br>
<br>

### Se não der certo, você precisa fazer o login por SSH!

1. verifique se já existe alguma chave em `~/.ssh` usando o comando `ls` ou `ls -al ~/.ssh`.

2. Crie uma chave nova `ssh-keygen -t rsa -b 4096 -C "seu_email@example.com"`

3. Verifique que o agente está rodando com `eval $(ssh-agent -s)`

4. Adicione a chave de segurança `ssh-add ~/.ssh/id_rsa`

5. Agora precisamos copiar o conteúdo do `id_rsa.pub` no github. Dica `clip < ~/.ssh/id_rsa.pub`

6. Vá no github em `settings` e `add SSH Key` >> `New SSH Key` e copie o código.