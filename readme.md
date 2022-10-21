# `Solicitação do teste`

Um back-end com endpoints de `/signup`, `/signin` e `/refreshToken`.

O que cada endpoint fará

#### `/signup`

cria o usuário com os campos email e senha.

#### `/signin`

retorna os tokens de acesso no caso de usuário válido. 

para usuários não válidos mensagem com o status code adequado.

### `/refreshToken`

retorna um novo token após ser chamado com o token válido

### Pontos extras

Teste unitário ou de integração, justificando a diferença entre os tipos.

### Resposta

Teste unitário testamos pequenas funcionalidades do sistema, classe ou função, praticamente testando algo simples. Para um teste de integração, testamos como se comporta diversas funcionalidades juntas, normalmente efetuamos esses teste direto nas rotas onde verificamos se retorna o status e body correto.
