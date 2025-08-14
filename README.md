# 🎙️ Node Tools Podcast

O **Node Tools Podcast** é uma **API REST** desenvolvida com **Node.js** e **TypeScript**, criada para otimizar buscas relacionadas a episódios ou podcasts específicos.  
O projeto fornece dados estruturados prontos para serem consumidos por qualquer front-end.

---

## 🚀 Funcionalidades

Atualmente, a API conta com **duas services** principais:

1. **Listar todos os podcasts**  
   - Método: **GET**  
   - Endpoint:  
     ```
     http://localhost:3333/api/list
     ```
   - Retorna todos os podcasts cadastrados no JSON.

2. **Filtrar episódios de um podcast específico**  
   - Método: **GET**  
   - Endpoint:
     ```
     http://localhost:3333/api/episode?p=Inteligência Ltda
     ```
   - Retorna todos os episódios relacionados ao podcast informado via parâmetro `p`.

---

## 🛠️ Tecnologias Utilizadas

- Node.js

- TypeScript


## 🏆 Desafios e Aprendizados

Durante o desenvolvimento do projeto, pude aplicar o padrão de arquitetura REST, adotando o protocolo HTTP como base.
A API foi estruturada da seguinte forma:

Request → enviada pelo cliente para o controller

Controller → solicita dados ao service

Service → é nutrido por um repositório

Response → enviado ao cliente com o resultado

Status codes implementados:

200 → Sucesso (requisição válida e processada)

204 → No Content (parâmetros válidos, mas sem resultados)

Melhorias futuras:

Implementar 404 para requisições que utilizem um link fora do padrão esperado.

Possibilidade de criar respostas mais detalhadas para erros.