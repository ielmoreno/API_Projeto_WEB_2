Faça o passo a passo abaixo para poder testar a estrura de api.
<br>
1-  Baixe o projeto em sua máquina
2-  Descompacte o projeto
3-  Abrir a pasta descompactada dentro do Visual Studio Code
4-  No terminal rodar o comando "npm install", que instalará todas as dependências necessária
5-  Configurar o arquivo .env com as informações de acesso ao banco de dados e inserir o modelo do banco no arquivo prisma.schema 
6a- Caso queira utilizar uma base minimamente populada dentro da pasta database encontra-se um arquivo sql, feito com o mariaDB, para executar e criar uma base pronta
6b- Caso queira utilizar uma base limpa, após a configuração do arquivo .env pode executar o comando "npm run prisma:push" que criará a base nova.
7-  No terminal executar o comando "npm run dev" para iniciar uma instância local em modo desenvolvedor tornando possivel testar a aplicação.
