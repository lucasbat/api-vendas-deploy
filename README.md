_A qualquer momento que precisar atualizar as referências de importação_
ctrl + shift + p
reload window
Para recarregar

# api_restful_udemy_julho_2022

Repositório do curso API Restful Javascript com Node.js, Typescript, TypeORM etc

ssh: git@github.com:lucasbat/api_restful_udemy_julho_2022.git

#1
[Instalando Docker no Ubuntu](https://www.aluiziodeveloper.com.br/primeiros-passos-com-docker/)

#6
Configuração do Editor Visual Studio Code
-Extensões

#7. Um pouco mais sobre Typescript

[Um pouco mais sobre Typescript](https://www.aluiziodeveloper.com.br/um-pouco-mais-sobre-typescript/)

Os 3 tipos básicos mais conhecidos são:
boolean: valores true ou false;
const isValid: boolean = true;
number: valores numéricos;
const actualYear: number = 2020;
string: valores textuais;
const aula: string = "Iniciando com Typescript";

Além dessas, temos outras tipagens básicas não muito convencionais:

any: aceita qualquer valor. Utilizado quando não queremos fazer a checagem do tipo;

void: é basicamente o oposto de any, utilizado principalmente para demarcar quando não queremos retornar valores de uma função (mesmo assim, ao utilizar void a função irá retornar undefined, explicitamente ou implicitamente);

null: aceita valores do tipo null;

undefined: aceita valores do tipo undefined;

never: não aceita nenhum tipo, utilizada principalmente para funções que nunca devem retornar algo, como loops infinitos ou excessões.

Em typescript existem duas formas de declarar Arrays:
const users: string[] = ["John", "Doe", "Nati", "Lucas", "Phil"];

const users: Array<string> = ["John", "Doe", "Nati", "Lucas", "Phil"];

Tuplas
const tupleSample: [string, boolean] = ["Algo de errado?", true]

Optional Properties
Uma possibilidade interessante nas interfaces é definir uma propriedade como opcional. Exemplo:

interface Curse {
name: string;
duration?: string;
}
Onde temos que o nome do curso é obrigatório, mas a duração é opcional.

Dynamic Properties
Além disso, outro caso interessante é quando além das propriedades que declaramos, queremos deixar em aberto que novas propriedades de um certo tipo sejam adicionadas. Exemplo:

interface User {
name: string;
email: string;
[propName: string]: string;
}
Onde temos uma interface User na qual, além das 2 propriedades que definimos, deixamos em aberto a possibilidade de N novas propriedades de nome (propName) string cujo valor também é do tipo string. Poderíamos implementar algo do tipo:

const john: User = {
name: "John Doe",
email: "johndoe@server.com",
nickname: "johndoe",
address: "Street One"
}

Readonly Properties
Além disso, podemos também definir que uma propriedade é apenas para leitura, pode atribuir um valor a ela apenas uma vez. Segue um exemplo:

interface Alunos {
readonly aprovado: boolean;
}

let classe: Alunos = { aprovado: false }
classe.aprovado = true // erro

Implements
Utilizando conceitos já comuns em linguagens tipadas como C# e Java, temos a possibilidade de reforçar que uma classe (ou uma função) atenda os critérios definidos em uma interface. Exemplo:

interface BalanceInterface {
increment(income: number): void;
decrement(outcome: number): void;
}

class Balance implements BalanceInterface {
private balance: number;

constructor() {
this.balance = 0;
}

increment(income: number): void {
this.balance += income;
}

decrement(outcome: number): void {
this.balance -= outcome;
}
}
Lembrando que ao utilizar o implements para que a interface force a classe a seguir os padrões impostos, só conseguimos referenciar o lado público (public) da classe.

Extends
Outro conceito importante já apresentado nessas linguagens é a possibilidade de uma interface herdar propriedades de outra interface. Exemplo:

interface Aircraft {
speed: number;
}

interface Fighter extends Aircraft {
hasMissiles: boolean;
missiles?: number;
}

const f22: Fighter = {
speed: 2000,
hasMissiles: true,
missiles: 4,
};

Union Types
Em alguns casos, queremos que uma variável/propriedade aceite mais de um tipo. Para esses casos, utilizamos os Union Types. Exemplo:

let age: number | string = 30;
age = "30";
age = false; // erro

Generics
Vimos diversas formas até agora de como realizar a tipagem com Typescript, até mesmo em casos mais complexos como funções e objetos. Mas e se, por exemplo, não soubermos, durante o desenvolvimento, qual tipo o argumento e o retorno de uma função devem receber? Para isso utilizamos os Generics. Exemplo:

const users: Array<string> = ["John", "Doe", "Nati", "Lucas", "Phil"];
Nesse exemplo utilizamos um generic do próprio Typescript, o Array, em que o tipo informado dentro de <> representa o tipo dos valores do array. É o equivalente de string[].

Agora vamos a um exemplo mais complexo, onde não sabemos o tipo da informação que poderá ser passada para uma função:

function example<T>(arg: T): T {
return arg;
}
Nesse caso, declaramos uma função example que recebe um argumento do tipo T e retorna um valor do tipo T. Então:

const value = example<string>("Typescript");
console.log(value) // irá printar o valor "Typescript"

Type assertions
É possível atribuir manualmente um tipo utilizando Type assertions. Exemplo:

const seller: any = "John Doe"; // declarado como any
const characterLength: number = (seller as string).length; // tipado como string

Referências
Handbook (Oficial)
A note about let # [https://www.typescriptlang.org/docs/handbook/basic-types.html]

Declaration Files (Oficial)
Sections # [https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html]

Project Configuration (Oficial)
tsconfig.json [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html]

Seção 3: Criação do Projeto para a API de Vendas
[Criar aplicação Node.js com Typescript](https://www.aluiziodeveloper.com.br/criar-aplica%C3%A7%C3%A3o-node-js-com-typescript/)

Fazer a instalação do Typescript na pasta do projeto:
`npm install typescript ts-node-dev @types/node tsconfig-paths -D`

Criar o arquivo "tsconfig.json" que conterá as configurações do Typescript, com o comando:
`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

Cria pasta src e dentro cria o arquivo server.ts

Para executar:
`yarn tsc`

Para ir direto: adiciona em package.json:
"scripts": {
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
}
E executa com:
`yarn dev`

[Repositório](https://github.com/aluiziodeveloper/instalacao-api-vendas)

# 12. Estrutura de Pastas do Projeto

## [Estrutura do Projeto](https://github.com/aluiziodeveloper/api-vendas/blob/main/project.md)

Estrutura de pastas:

**config** - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.

**modules** - abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio criaremos os seguintes módulos na aplicação: customers, products, orders e users.

**shared** - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.

**services** - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:

- A senha deve ser armazenada com criptografia;
- Não pode haver mais de um produto com o mesmo nome;
- Não pode haver um mesmo email sendo usado por mais de um usuário;
- E muitas outras...

Criando a estrutura de pastas:

mkdir -p src/config

mkdir -p src/modules

mkdir -p src/shared/http

mv src/server.ts src/shared/http/server.ts

Ajustar o arquivo package.json:

{
"scripts": {
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/shared/http/server.ts"
}
}
Configurando as importações
Podemos usar um recurso que facilitará o processo de importação de arquivos em nosso projeto.

Iniciamos configurando o objeto paths do tsconfig.json, que permite criar uma base para cada path a ser buscado no projeto, funcionando de forma similar a um atalho:

"paths": {
"@config/_": ["src/config/_"],
"@modules/_": ["src/modules/_"],
"@shared/_": ["src/shared/_"]
}

_Nesta videoaula ficou faltando instalar a biblioteca que irá indicar ao nosso script do ts-node-dev, como interpretar os atalhos que configuramos iniciando com o caracter @._

O nome dessa biblioteca é tsconfig-paths, e para instalar execute o seguinte comando no terminal (na pasta do projeto):

`yarn add -D tsconfig-paths`
Depois de instalar o tsconfig-paths, ajustar o script dev no arquivo package.json, incluindo a opção -r tsconfig-paths/register. Deverá ficar assim:

`"dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules src/shared/http/server.ts"`
Observação: o comando acima deve ser incluído como uma linha única do script dev.

Agora, para importar qualquer arquivo no projeto, inicie o caminho com um dos paths configurados, usando o CTRL+SPACE para usar o autocomplete.

## 13. Primeira Execução da Aplicação

Instalar dependencias:
`yarn add express cors express-async-errors`

`yarn add -D @types/express @types/cors`

## 14. Customizando o Tratamento de Erros da Aplicação

**IMPORTANTE** _O middleware serve para interceptar o erro, diminui o trabalho de utilizar try-catch_

O middleware a seguir foi criado no arquivo server.ts, logo após `app.use(routes)` para tratar seus erros:

```
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
})
```

## Seção 4: Configuração dos Recursos para Consumir Dados na Aplicação

## 15. Conceitos Básicos do TypeORM

[TypeORM](https://typeorm.io/) serve para relacionar a tabela do banco de dados com uma instancia de uma classe Javascript (objeto), gerenciada pelo TypeORM.

Instalar:
yarn add typeorm reflect-metadata pg

## 16. Conceitos Básicos de Docker

[Primeiros Passos Com Docker](https://www.aluiziodeveloper.com.br/primeiros-passos-com-docker/)

**Segue a lista de comandos docker e sua utilidade:**
docker attach – Acessar dentro do container e trabalhar a partir dele.
docker build – A partir de instruções de um arquivo Dockerfile eu possa criar uma imagem.
docker commit – Cria uma imagem a partir de um container.
docker cp – Copia arquivos ou diretórios do container para o host.
docker create – Cria um novo container.
docker diff – Exibe as alterações feitas no filesystem do container.
docker events – Exibe os eventos do container em tempo real.
docker exec – Executa uma instrução dentro do container que está rodando sem precisar atachar nele.
docker export – Exporta um container para um arquivo .tar.
docker history – Exibe o histórico de comandos que foram executados dentro do container.
docker images – Lista as imagens disponíveis no host.
docker import – Importa uma imagem .tar para o host.
docker info – Exibe as informações sobre o host.
docker inspect – Exibe r o json com todas as configurações do container.
docker kill – Da Poweroff no container.
docker load – Carrega a imagem de um arquivo .tar.
docker login – Registra ou faz o login em um servidor de registry.
docker logout – Faz o logout de um servidor de registry.
docker logs – Exibe os logs de um container.
docker port – Abre uma porta do host e do container.
docker network – Gerenciamento das redes do Docker.
docker node – Gerenciamento dos nodes do Docker Swarm.
docker pause – Pausa o container.
docker port – Lista as portas mapeadas de um container.
docker ps – Lista todos os containers.
docker pull – Faz o pull de uma imagem a partir de um servidor de registry.
docker push – Faz o push de uma imagem a partir de um servidor de registry.
docker rename – Renomeia um container existente.
docker restart – Restarta um container que está rodando ou parado.
docker rm – Remove um ou mais containeres.
docker rmi – Remove uma ou mais imagens.
docker run – Executa um comando em um novo container.
docker save – Salva a imagem em um arquivo .tar.
docker search – Procura por uma imagem no Docker Hub.
docker service – Gernciamento dos serviços do Docker.
docker start – Inicia um container que esteja parado.
docker stats – Exibe informações de uso de CPU, memória e rede.
docker stop – Para um container que esteja rodando.
docker swarm – Clusterização das aplicações em uma orquestração de várias containers, aplicações junto.
docker tag – Coloca tag em uma imagem para o repositorio.
docker top – Exibe os processos rodando em um container.
docker unpause – Inicia um container que está em pause.
docker update – Atualiza a configuração de um ou mais containers.
docker version – Exibe as versões de API, Client e Server do host.
docker volume – Gerenciamento dos volumes no Docker.
docker wait – Aguarda o retorno da execução de um container para iniciar esse container.

## 17. NOTA sobre a versão do TypeORM

## 18. Criação do Banco de Dados e Configuração da Conexão com o TypeORM

[TypeORM](https://typeorm.io/)
Pode se fazer conexão usando `createConnection` ou `ormconfig`

typeorm/index.ts vai buscar através de `createConnection()` o arquivo `ormconfig.json`.
Dentro do arquico server.ts, basta importar com
`import '@shared/typeorm';`

Comando para criar container:
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

Instala um sgbd, sugestão: Dbeaver
Cria uma nova conexão com banco de dados

## 19. CORREÇÃO para os campos com tipo TIMESTAMP

A configuração de campo para receber data com o tipo timestamp que será exibida ao longo do curso, deve ser substituída para que não tenhamos problemas com fuso horário.

Em todas as aulas em que houver criação de migration, considerar colocar os campos com o tipo `timestamp` com o valor `timestamp with time zone`.

Substituir por (em todas as migrações da aplicação):

```
{
  name: 'created_at',
  type: 'timestamp with time zone',
  default: 'now()',
},
{
  name: 'updated_at',
  type: 'timestamp with time zone',
  default: 'now()',
},
```

## 20. Configuração do TypeORM para Executar Migrações no Banco de Dados

Cria caminho para receber as migrations
Altera em `ormconfig.json` para receber esse caminho.
No package.json adiciona um script:
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

## Seção 5: Criação dos Recursos do Módulo de Produtos

## 21. Migration da Tabela products

Criar migration:
`yarn typeorm migration:create -n CreateProducts`

queryRunner serve para executar as operações, (e.g: Criar, modificar, excluir tabela)

Executar migration:
`yarn typeorm migration:run`

Vai dar erro, vai no Dbeaver, clica no banco de dados > criar extensão, e seleciona a extensão "uuid-ossp"

## 22. Conceito de Entidades do TypeORM

[Entities](https://typeorm.io/entities) é uma classe que mapeia para uma tabela de banco de dados (ou coleção ao usar o MongoDB). Você pode criar uma entidade definindo uma nova classe e marcando-a com @Entity():

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

```
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}
```

This will create following database table:
+-------------+--------------+----------------------------+
| user |
+-------------+--------------+----------------------------+
| id | int(11) | PRIMARY KEY AUTO_INCREMENT |
| firstName | varchar(255) | |
| lastName | varchar(255) | |
| isActive | boolean | |
+-------------+--------------+----------------------------+

## 23. Entidade de Produtos

Cria a pasta para a entidade
`mkdir -p src/modules/products/typeorm/entities`
e cria arquivo `Products.ts`
Nele digita:

```
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;
```

Para o lint parar de reclamar,
vai em `tsconfig.json`
Descomenta:

```
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"strictPropertyInitialization": false,
```

## 24. Conceito de Repositórios do TypeORM

Repositório permite fazer as operações em uma entidade, por exemplo as operações em um CRUD.

[What is Repository](https://typeorm.io/working-with-repository):
Repository is just like EntityManager but its operations are limited to a concrete entity. You can access the repository via EntityManager.

[Custom repositories](https://typeorm.io/custom-repository):
Você pode criar um repositório personalizado que deve conter métodos para trabalhar com seu banco de dados. Por exemplo, digamos que queremos ter um método chamado findByName(firstName: string, lastName: string) que buscará usuários por um determinado nome e sobrenome. O melhor lugar para este método é um Repositório, então podemos chamá-lo como userRepository.findByName(...). Você pode conseguir isso usando repositórios personalizados.

## 25. Repositório de Produtos

Em `products > typeorm`, cria uma pasta `repositories` e o arquivo `ProductsRepository.ts`

Nele digita:

```
import { EntityRepository, Repository } from "typeorm"
import Product from "../entities/Product"

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public async findByName(name: string): Promise<Product | undefined> {
        const product = this.findOne({
            where: {
                name,
            },
        });

        return product;
    }
}
```

## 26. Visão geral: Tratamentos das Requisições na nossa API

## 27. Serviço para Criação de Produto

Cria pasta e arquivo:
`modules > products > services > CreateProductService.ts`

E digita:

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}

class CreateProductService {
    public async execute({name, price, quantity}: IRequest): Promise<Product> {
        const productsRepository = getCustomRepository(ProductRepository);
        const productExists = await productsRepository.findByName(name);

        if (productExists) {
            throw new AppError('There is already one product with this name');
        }

        const product = productsRepository.create({
            name,
            price,
            quantity,
        });

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProductService
```

## 28. Serviço para Listar Produtos

Cria pasta e arquivo:
`modules > products > services > ListProductService.ts`

E digita:

```
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

class ListProductService {
    public async execute(): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductRepository);

        const products = productsRepository.find({
        });

        return products;
    }
}

export default ListProductService
```

## 29. Serviço para Exibir um Produto

Cria pasta e arquivo:
`modules > products > services > ShowProductService.ts`

E digita:

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: string;
}

class ShowProductService {
    public async execute({ id }: IRequest): Promise<Product | undefined> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found.')
        }
        return product;
    }
}

export default ShowProductService;
```

## 30. Serviço para Atualizar um Produto

Cria pasta e arquivo:
`modules > products > services > UpdateProductService.ts`

E digita:

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

class UpdateProductService {
    public async execute({
        id,
        name,
        price,
        quantity
    }: IRequest): Promise<Product> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found.')
        }
        const productExists = await productsRepository.findByName(name);

        if (productExists && name !== product.name) {
            throw new AppError('There is already one product with this name');
        }

        product.name = name;
        product.price = price;
        product.quantity = quantity;

        await productsRepository.save(product);

        return product;
    }
}

export default UpdateProductService;
```

## 31. Serviço para Excluir um Produto

Cria pasta e arquivo:
`modules > products > services > DeleteProductService.ts`

E digita:

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: string;
}

class DeleteProductService {
    public async execute({ id }: IRequest): Promise<void> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found.')
        }

        await productsRepository.remove(product);
    }
}

export default DeleteProductService;
```

## 32. Controller de Produtos

Cria pasta e arquivo em modules > products > controllers > ProductsController.ts
Este arquivo serve para lidar com os requests e responses

E digita:

```
import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductsService";
import UpdateProductService from "../services/UpdateProductsService";

export default class ProductsController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showProduct = new ShowProductService();

        const product = await showProduct.execute({ id });

        return response.json(product);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({ name, price, quantity })

        return response.json(product);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;

        const { id } = request.params;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({id, name, price, quantity});

        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute({ id });

        return response.json([])
    }
}
```

## 33. Rotas de Produtos

Cria pasta e arquivo em modules > products > routes > products.routes.ts
Este arquivo serve para lidar com as rotas de produtos

E digita:

```
import { Router } from 'express'
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index)
productsRouter.get('/:id', productsController.show)
productsRouter.post('/', productsController.create)
productsRouter.put('/:id', productsController.update)
productsRouter.delete('/:id', productsController.delete)

export default productsRouter;
```

importa o `productsRouter` no arquivo raiz de rotas

Adiciona ao ormconfig:
`"entities": ["./src/modules/**/typeorm/entities/*.ts"],`

Cria o `workspace`, `folder` e `request` no insomnia para testar rota;

## 34. Validação dos Dados de Requisições

Em `server.ts` adiciona a importação:
`import 'express-async-errors';`

O pacote [Celebrate](https://www.npmjs.com/package/celebrate) é um _express middleware_ utilizado para validar os dados, e usa a biblioteca **joi**

Exemplo de Uso:

```
const express = require('express');
const BodyParser = require('body-parser');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const app = express();
app.use(BodyParser.json());

app.post('/signup', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer(),
    role: Joi.string().default('admin')
  }),
  [Segments.QUERY]: {
    token: Joi.string().token().required()
  }
}), (req, res) => {
  // At this point, req.body has been validated and
  // req.body.role is equal to req.body.role if provided in the POST or set to 'admin' by joi
});
app.use(errors());
```

Instalar celebrate:
`yarn add celebrate`

Instalar tipagem:
`yarn add -D @types/joi`

Cria as validações em `products.routes.ts` assim:

```
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import { celebrate, Joi, errors, Segments } from 'celebrate';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index)

productsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    productsController.show)

productsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required(),
        }
    }),
    productsController.create
);

productsRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    productsController.update)

productsRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    productsController.delete)

export default productsRouter;
```

## 35. Migration da Tabela users

Criar migration:
`yarn typeorm migration:create -n CreateUsers`

Resultado da migration criada:

```
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1658942002274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },{
                        name: 'name',
                        type: 'varchar',
                        isUnique: true,
                    },{
                        name: 'password',
                        type: 'varchar',
                    },{
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },{
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },{
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
```

Executar migration:
`yarn typeorm migration:run`

## 36. Entidade de Usuários

Cria pastas e arquivo: modules > users > typeorm > entities > User.ts

Digita:

```
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
```

## 37. Repositório de Usuários

Cria pasta e arquivo: modules > users > typeorm > repositories > UsersRepository.ts

Digita:

```
import {  EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByName(name: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                name,
            },
        });

        return user;
    }
    public async findById(id: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                id,
            },
        });

        return user;
    }
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email,
            },
        });

        return user;
    }
}

export default UsersRepository;
```

## 38. Serviço para Criação de Usuário

Cria pasta e arquivo: modules > users > services > CreateUserService.ts

Digita:

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({name, email, password}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const emailExists = await usersRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email address already used.');
        }

        const user = usersRepository.create({
            name,
            email,
            password,
        })

        await usersRepository.save(user);
        return user
    }

}

export default CreateUserService
```

## 39. Serviço para Listar Usuários

Cria pasta e arquivo: modules > users > services > ListUserService.ts

Digita:

```
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

class ListUserService {
    public async execute(): Promise<User[]> {
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await usersRepository.find();

        return users;
    }
}

export default ListUserService;
```

## 40. Controller de Usuários

Cria pasta e arquivo: modules > users > controller > UsersController.ts

Digita:

```
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

export default class UsersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listUser = new ListUserService();

        const users = listUser.execute();

        return response.json(users);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        return response.json(user)
    }
}
```

## 41. Rotas de Usuários

Cria pasta e arquivo: modules > users > routes > users.routes.ts

Digita:

```
import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate, Joi, errors, Segments } from 'celebrate';


const usersRouter = Router()
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    usersController.create,
)

export default usersRouter;
```

## 42. Criptografia em Senhas de Usuários

Instala o BCrypt:
`yarn add bcryptjs`

Instala a tipagem:
`yarn add -D @types/bcryptjs`

Altera `CreateUserService.ts`:

```
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({name, email, password}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const emailExists = await usersRepository.findByEmail(email);
        const nameExists = await usersRepository.findByName(name);

        if (emailExists) {
            throw new AppError('Email address already used.');
        }
        if (nameExists) {
            throw new AppError('Name already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        })

        await usersRepository.save(user);
        return user
    }

}

export default CreateUserService
```

## 43. Serviço para Criação de Sessão de Autenticação

Cria pasta e arquivo: modules > users > services > CreateSessionService.ts

Digita:

```
import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
    email: string;
    password: string;
}

class CreateSessionsService {
    public async execute({email, password}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Incorrect email/password combination', 401);
        }

        const passwordConfirmed = await compare(password, user.password);

        if (!passwordConfirmed) {
            throw new AppError('Incorrect password', 401);
        }

        return user
    }

}

export default CreateSessionsService
```

## 44. Controller de Sessão de Autenticação

Cria pasta e arquivo: modules > users > controller > SessionsController.ts

Digita:

```
import{ Request, Response } from 'express'
import CreateSessionsService from '../services/CreateSessionService';

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {email, password} = request.body;

        const createSession = new CreateSessionsService();

        const user = await createSession.execute({
            email,
            password
        });

        return response.json(user);
    }
}
```

## 45. Rota de Sessão de Autenticação

Cria arquivo: modules > users > routes > sessions.routes.ts

Digita:

```
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SessionsController from '../controllers/SessionsController';


const sessionsRouter = Router()
const sessionsController = new SessionsController();

sessionsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    sessionsController.create,
)

export default sessionsRouter;
```

## 46. Conceito Básico de Autenticação por Token JWT

[JWT](https://jwt.io/): JSON Web Tokens são um método aberto e padrão do setor RFC 7519 para representar declarações de forma segura entre duas partes.

_JWT.IO_ permite decodificar, verificar e gerar JWT.

## 47. Sessão de Autenticação com Token JWT

Fazer a instalação do JWT:
`yarn add jsonwebtoken`

Fazer a instalação da tipagem JWT:
`yarn add -D @types/jsonwebtoken`

_Cuidado ao passar informações como payload para o sign()_. Melhor usa o id ou nome por exemplo.

Acessar o www.md5.cz digita alguns caracteres e pega o md5 para usar.

## 48. Middleware de Autenticação para Proteção das Rotas

Em src > config, cria o arquivo auth.ts
Digita:

Cria arquivo: modules > users > middlewares > isAuthenticated.ts

Digita:

```
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '@config/auth'
export default function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT Token is missing.')
    }

    // Ex.: Bearer 9asd09asd09ajs09dja09sdj09asd09ajs09da0
    const [, token] = authHeader.split(' ');

    try {
        const decodeToken = verify(token, authConfig.jwt.secret);

        return next();
    } catch {
        throw new AppError('Invalid JWT Token.');
    }
}
```

Importa em `users.routes.ts`:

```
import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate, Joi, errors, Segments } from 'celebrate';
import isAuthenticated from '../middlewares/isAuthenticated';


const usersRouter = Router()
const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    usersController.create,
)

export default usersRouter;
```

Cria src > config > auth.ts

```
export default {
    jwt: {
        secret: 'b51c67e4589ba993388a522174df231f',
        expiresIn: '1d',
    },
};
```

## 49. Sobrescrita do Objeto Request do Express

Pasta `middleware` foi movido para `http`.

A variável decodedToken foi usada para facilitar buscar os recursos autorizados para o usuário através do seu ID:

iat: criação (timestamp)
exp: expiração (timestamp)
sub: subject (id)

decodedToken = {
iat: 1658964317,
exp: 1659050717,
sub: '1aecf747-754c-4bde-95f0-2ff11a1baccf'
}

SOBRESCREVER TIPO DE OBJETO
Em src cria @types > express > index.d.ts

Digita:

```
declare namespace Express {
    export interface Request {
        user: {
            id: string;
        }
    }
}
```

Em tsconfig.json descomenta e acrescenta:

```
"typeRoots": [
  "@types",
  "./node_modules/@types"
]
```

Criar `src > config > auth.ts`

```
export default {
    jwt: {
        secret: 'b51c67e4589ba993388a522174df231f',
        expiresIn: '1d',
    },
};
```

Altera isAuthenticated.ts:

```
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '@config/auth'

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT Token is missing.')
    }

    // Ex.: Bearer 9asd09asd09ajs09dja09sdj09asd09ajs09da0
    const [, token] = authHeader.split(' ');

    try {
        const decodedToken = verify(token, authConfig.jwt.secret);

        const { sub } = decodedToken as ITokenPayload;

        request.user = {
            id: sub,
        }

        return next();
    } catch {
        throw new AppError('Invalid JWT Token.');
    }
}
```

## 50. Configuração da Lib para Uploads - Multer

Instalar multer:
`yarn add multer`

Instala tipos:
`yarn add -D @types/multer`

Configura:
src > config > upload.ts

```

```

Na raiz cria:
uploads > uploads.ts

```
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    directory: uploadFolder,
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');

            const filename = `${fileHash}-${file.originalname}`;

            callback(null, filename);
        },
    })
}
```

## 51. Serviço para Atualização de Avatar de Usuário

Criar: modules > users > services > UpdateUserAvatarService.ts

```
import AppError from "@shared/errors/AppError";
import path from "path";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import uploadConfig from '@config/upload';
import fs from "fs";

interface IRequest {
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found.');
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await usersRepository.save(user);
    }

}

export default UpdateUserAvatarService
```

## 52. Controller de Avatar de Usuário

Cria:
users > controller > UsersAvatarController.ts

```
import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UsersAvatarController {
    public async update(request: Request, response: Response): Promise<Response> {
        const updateAvatar = new UpdateUserAvatarService();

        const user = updateAvatar.execute({
            user_id: request.user.id,
            avatarFilename: request.file.filename,
        });

        return response.json(user);
    }
}
```

## 53. Rota de Upload de Avatar de Usuário

Altera: `users.routes.ts`

```
import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import UsersAvatarController from '../controllers/UsersAvatarController';


const usersRouter = Router()
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController;

const upload = multer(uploadConfig)

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    usersController.create,
)

usersRouter.patch(
    '/avatar',
    isAuthenticated,
    upload.single('avatar'),
    usersAvatarController.update,
)

export default usersRouter;
```

## 54. Rota Estática para as Imagens de Avatar

Em `shared > http > server.ts`

## 55. Visão geral - Gerenciamento de Senhas

## 56. Migração da Tabela user_tokens

`yarn typeorm migration:create -n CreateUserTokens`

OBs: tabela com foreignKeys

```
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTokens1659029099537 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_tokens',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },{
                        name: 'token',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },{
                        name: 'user_id',
                        type: 'uuid',
                    },{
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },{
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }],
                    foreignKeys: [
                        {
                            name: 'TokenUser',
                            referencedTableName: 'users',
                            referencedColumnNames: ['id'],
                            columnNames: ['user_id'],
                            onDelete: 'CASCADE',
                            onUpdate: 'CASCADE',
                        }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_tokens')
    }

}
```

`yarn typeorm migration:run`

## 57. Entidade de Tokens de Usuários

Criar entidade UserTokens.ts

```
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class UserTokens {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default UserTokens;
```

## 58. Repositório de Tokens de Usuários

Criar UserTokensRepositories.ts

```
import {  EntityRepository, Repository } from "typeorm";
import UserToken from "../entities/UserToken";

@EntityRepository(UserToken)
class UsersTokensRepository extends Repository<UserToken> {
    public async findByToken(token: string): Promise<UserToken | undefined> {
        const userToken = await this.findOne({
            where: {
                token,
            },
        });

        return userToken;
    }
    public async generate(user_id: string): Promise<UserToken | undefined> {
        const userToken = await this.create({
            user_id,
        });

        await this.save(userToken);

        return userToken;
    }

}

export default UsersTokensRepository;
```

## 59. Serviço de Envio de Email para Recuperação de Senha

Criar user > services > SendForgotPasswordEmailService.ts

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UsersTokensRepository from "../typeorm/repositories/UserTokensRepository";

interface IRequest {
    email: string;
}

class CreateUserService {
    public async execute({ email }: IRequest): Promise<void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRespository = getCustomRepository(UsersTokensRepository);

        const user = await usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError('User does not exists.');
        }

        const token = await userTokenRespository.generate(user.id);

        console.log(token);
    }

}

export default CreateUserService
```

## 60. Serviço para Redefinição de Senha

instalar [date-fns](date-fns.org)
`yarn add date-fns`

Cria ResetPasswordService.ts

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { isAfter, addHours } from 'date-fns'
import { hash } from 'bcryptjs';
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UsersTokensRepository from "../typeorm/repositories/UserTokensRepository";

interface IRequest {
    token: string;
    password: string;
}

class CreatePasswordService {
    public async execute({ token, password }: IRequest): Promise<void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokenRespository = getCustomRepository(UsersTokensRepository);

        const userToken = await userTokenRespository.findByToken(token);

        if(!userToken) {
            throw new AppError('User Token does not exists.');
        }

        const user = await usersRepository.findById(userToken.user_id)

        if(!user) {
            throw new AppError('User does not exists.');
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token expired.');
        }

        user.password = await hash(password, 8);
    }
}

export default CreatePasswordService
```

## 61. Controller de Tokens de Usuários - Forgot Password

Cria users > controllers > ForgotPasswordController.ts

```
import { Request, Response } from "express";
import SendForgotPasswordEmailService from "../services/SendForgotPasswordEmailService";

export default class ForgotPasswordController {

    public async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const sendForgotPasswordEmail = new SendForgotPasswordEmailService CreateUserService();

        await sendForgotPasswordEmail.execute({
            email,
        });

        return response.status(204).json();
    }
}
```

## 62. Rota de Envio de Email - Forgot Password

Criar users > routes > password.routes.ts

```
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/ForgotPasswordController';


const passwordRouter = Router()
const forgotPasswordController = new ForgotPasswordController();

passwordRouter.post(
    '/forgot',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
        },
    }),
    forgotPasswordController.create,
)

export default passwordRouter;
```

importa no arquivo principal de rotas
`routes.use('/password', passwordRouter);`

## 63. Controller de Redefinição de Senha

Cria
users > controllers > ResetPasswordController.ts

```
import { Request, Response } from "express";
import ResetPasswordService from "../services/ResetPasswordService";

export default class ResetPasswordController {

    public async create(request: Request, response: Response): Promise<Response> {
        const { password, token } = request.body;

        const resetPassword = new ResetPasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}
```

## 64. Rota de Redefinição de Senha

Atualiza ResetPasswordController.ts

```
import { Request, Response } from "express";
import ResetPasswordService from "../services/ResetPasswordService";

export default class ResetPasswordController {

    public async create(request: Request, response: Response): Promise<Response> {
        const { password, token } = request.body;

        const resetPassword = new ResetPasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}
```

## 65. Ethereal Fake Email Service

[Ethereal](https://ethereal.email)
Serviço de e-mail antitransacional, gratuito e as mensagens nunca são entregues.

Instala o _Nodemailer_
`yarn add nodemailer`
E os tipos:
`yarn add -D @types/nodemailer`

cria config > mail > EtherealMail.ts

```
import nodemailer from 'nodemailer';

interface ISendMail {
    to: string;
    body: string;
}

export default class EtherealMail {
    static async sendMail({ to, body }: ISendMail): Promise<void> {
        const account = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            }
        });

        const message = await transporter.sendMail({
            from: 'equipe@apivendas.com',
            to,
            subject: 'Recuperação de senha',
            text: body,
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }

}
```

Em SendForgotPasswordEmailService.ts

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import EtherealMail from '@config/mail/EtherealMail';

interface IRequest {
    email: string;
}

class CreateUserService {
    public async execute({ email }: IRequest): Promise<void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokensRepository = getCustomRepository(UserTokensRepository);

        const user = await usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError('User does not exists.');
        }

        const token = await userTokensRepository.generate(user.id);

        //console.log(token);

        await EtherealMail.sendMail({
            to: email,
            body: `Solicitação de redefinição de senha recebida: ${token?.token}`,
        })
    }
}

export default CreateUserService
```

## 66. Template Handlebars para Email (parse) - Parte 1

[Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) é uma linguagem de modelagem simples.

Ele usa um modelo e um objeto de entrada para gerar HTML ou outros formatos de texto. Os modelos Handlebars se parecem com texto normal com expressões de Handlebars incorporadas.

Instalar:
`yarn add handlebars`

Cria config > mail > HandlebarsMailTemplate.ts

```
import handlebars from 'handlebars';

interface ITemplateVariable {
    [key: string]: string | number;
}

interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariable;
}


export default class handlebarsMailTemplate {
    public async parse({
        template,
        variables,
    }: IParseMailTemplate): Promise<string> {
        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);
    }
}
```

Adaptar EtherealMail.ts

```
import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandlebarsMailTemplate'
interface IMailContact {
    name: string;
    email: string;
}

interface ITemplateVariable {
    [key: string]: string | number;
}

interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariable;
}

interface ISendMail {
    to: IMailContact;
    from?: IMailContact;
    subject: string;
    templateData: IParseMailTemplate;
}

export default class EtherealMail {
    static async sendMail({ to, from, subject, templateData }: ISendMail): Promise<void> {
        const account = await nodemailer.createTestAccount();

        const mailTemplate = new HandlebarsMailTemplate();

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            }
        });

        const message = await transporter.sendMail({
            from: {
                name: from?.name || 'Equipe API Vendas',
                address: from?.email || 'equipe@apivendas.com.br'
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject,
            html: await mailTemplate.parse(templateData),
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }

}
```

## 67. Template Handlebars para Email (parse) - Parte 2

Altera EtherealMail.ts

```
import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandlebarsMailTemplate'
interface IMailContact {
    name: string;
    email: string;
}

interface ITemplateVariable {
    [key: string]: string | number;
}

interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariable;
}

interface ISendMail {
    to: IMailContact;
    from?: IMailContact;
    subject: string;
    templateData: IParseMailTemplate;
}

export default class EtherealMail {
    static async sendMail({ to, from, subject, templateData }: ISendMail): Promise<void> {
        const account = await nodemailer.createTestAccount();

        const mailTemplate = new HandlebarsMailTemplate();

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            }
        });

        const message = await transporter.sendMail({
            from: {
                name: from?.name || 'Equipe API Vendas',
                address: from?.email || 'equipe@apivendas.com.br'
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject,
            html: await mailTemplate.parse(templateData),
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}
```

E o SendForgotPasswordEmailService.ts

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import EtherealMail from '@config/mail/EtherealMail';

interface IRequest {
    email: string;
}

class CreateUserService {
    public async execute({ email }: IRequest): Promise<void> {
        const usersRepository = getCustomRepository(UsersRepository);
        const userTokensRepository = getCustomRepository(UserTokensRepository);

        const user = await usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError('User does not exists.');
        }

        const { token } = await userTokensRepository.generate(user.id);

        //console.log(token);

        await EtherealMail.sendMail({
            to: {
                name: user.name,
                email: user.email,
            },
            subject: '[API Vendas] Recuperação de Senha',
            templateData: {
                template: `Olá {{name}}: {{token}}`,
                variables: {
                    name: user.name,
                    token,
                }
            }
        })
    }
}

export default CreateUserService
```

## 68. Template Engine Handlebars (html)

Criar modules > users > views > forgot_password.hbs

```
<style>
    .message-content {
        font-family: Arial, Helvetica, sans-serif;
        max-width: 600px;
        font-size: 18px;
        line-height: 24px;
    }
</style>

<div class="message-content">
    <p>Olá {{name}}!</p>
    <br/>
    <p>Recebemos uma solicitação de redefinição de senha para a sua conta de usuário.</p>
    <p>Se realmente foi você quem solicitou, clique no link abaixo para escolher uma nova senha.</p>
    <p>
        <a href="{{link}}">Resetar minha senha</p>
    </p>
    <p>Caso você não tenha realizado essa solicitação, descarte este email</p>
    <p>Obrigado!</p>
    <p>Equipe API Vendas</p>
</div>
```

## 69. Mail File Template com Handlebars

## 70. Conclusão: Envio de Email para Recuperação de Senha

## 71. Visão Geral: Gerenciamento de Perfis de Usuários

## 72. Serviço para Exibir Perfil de um Usuário

Cria users > services > ListUserService.ts

```
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IResquest {
    user_id: string;
}

class ShowProfileService {
    public async execute({ user_id }: IResquest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(user_id);

        if (!user){
           throw new AppError('user not found.');
        }

        return user;
    }
}

export default ShowProfileService;
```

## 73. Serviço para Atualizar Perfil de um Usuário

Cria UpdateProfileServices.ts

```
import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IResquest {
    user_id: string;
    name: string;
    email: string;
    password?: string;
    old_password?: string;
}

class UpdateProfileService {
    public async execute({
        user_id,
        name,
        email,
        password,
        old_password
    }: IResquest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findById(user_id);

        if (!user){
           throw new AppError('user not found.');
        }

        const userUpdateEmail = await usersRepository.findByEmail(email);

        if (userUpdateEmail && userUpdateEmail.id !== user_id) {
            throw new AppError('There is already one user with this email.');
        }

        if (password && !old_password) {
            throw new AppError('Old password is required.');
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError('Old password dos not match.');
            }

            user.password = await hash(password, 8);
        }

        user.name = name;
        user.email = email;

        await usersRepository.save(user);
        return user;
    }
}

export default UpdateProfileService;
```

## 74. Controller de Perfil de Usuário

ProfileController.ts:

```
import { Request, Response } from "express";
import ShowProfileService from "../services/ShowProfileService";
import UpdateProfileService from "../services/UpdateProfileService";

export default class ProfileController {
    public async show(request: Request, response: Response): Promise<Response> {
        const showProfile = new ShowProfileService();
        const user_id = request.user.id;

        const user = await showProfile.execute({ user_id });

        return response.json(user);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const user_id = request.user.id;
        const {name, email, password, old_password} = request.body;

        const updateProfile = new UpdateProfileService();

        const user = await updateProfile.execute({
            user_id,
            name,
            email,
            password,
            old_password,
        });

        return response.json(user)
    }
}
```

## 75

Cria routes > profile.routes.ts:

```
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import ProfileController from '../controllers/ProfileController';


const profileRouter = Router()
const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get('/', isAuthenticated, profileController.show);

profileRouter.put(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            old_password: Joi.string(),
            password: Joi.string().optional(),
            password_confirmation: Joi.string()
                .valid(Joi.ref('password'))
                .when('password',{
                    is: Joi.exist(),
                    then: Joi.required(),
                }),
        },
    }),
    profileController.update,
)

export default profileRouter;
```

Importa no arquivo principal de rotas

## 76. Migração da Tabela customers

`yarn typeorm migration:create -n CreateCustomers`

```
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1659107878373 implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customers',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },{
                        name: 'name',
                        type: 'varchar',
                    },{
                        name: 'email',
                        type: 'varchar',
                    },{
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },{
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customers');
    }

}
```

`yarn typeorm migration:run`

## 77. Entidade de Clientes

criar modules > customers > typeorm > entities > Customer.ts

```
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customers')
class Customers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Customers;
```

## 78. Repositório de Clientes

customers > repositories > CustomersRepository.ts

```
import Customer from "@modules/customers/typeorm/entities/Customer";
import {  EntityRepository, Repository } from "typeorm";

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {
    public async findByName(name: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                name,
            },
        });

        return customer;
    }
    public async findById(id: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                id,
            },
        });

        return customer;
    }
    public async findByEmail(email: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                email,
            },
        });

        return customer;
    }
}

export default CustomerRepository;
```

## 79. Serviços de Clientes

cria customers > services > ListCustomerService.ts

## 82. Conceitos de Relacionamentos com o TypeORM - Parte 1

[Relacionamento Entre Tabelas com TypeORM](https://typeorm.io/relations)

https://github.com/typeorm/typeorm/blob/master/docs/relations.md

## 84. Migração da Tabela orders

`yarn typeorm migration:create -n CreateOrders`

yarn typeorm migration:run

yarn typeorm migration:create -n AddCustomerIdToOrders

## 93

## 95

## 96

Mudei a configuração do typeorm no package.json:
De:
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

Para:
"typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js"

## 98. Paginação de Dados com a Lib TypeORM Pagination

[Savannabits](https://github.com/savannabits/typeorm-pagination)

`yarn add typeorm-pagination`

## 99. Variáveis de Ambiente

`yarn add dotenv`

`touch .env`
`touch .env.example`

## 100. Conhecendo a Lib Class Transformer

[Class-transformer](github.com/typestack/class-transformer)
`yarn add class-transformer`

A biblioteca sofreu uma alteração,
Ao invés do classToClass agora na versão 0.5.1
instanceToInstance

## 101. Conceitos e configuração inicial do Redis

[Redis](https://redis.io/)
Ler o Get Started

Altera o .env

```
APP_SECRET=b51c67e4589ba993388a522174df231f
APP_API_URL=http://localhost:3333
APP_WEB_URL=http://localhost:3000
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASS=
```

Cria um container
docker run --name redis -p 6379:6379 -d -t redis:alpine

`yarn add redis ioredis`

`yarn add @types/redis -D`
`yarn add @types/ioredis -D`

cache.ts

```
import { RedisOptions } from "ioredis";

interface ICacheConfig {
    config: {
        redis: RedisOptions;
    },
    driver: string;
}

export default {
    config: {
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASS || undefined,
        }
    },
    driver: 'redis',
} as ICacheConfig;
```

## 102. Implementando a Classe RedisCache - parte 1

consultar cache no shell:
docker exec -it redis sh
redis cli
set chave valor
get chave
del chave

## 106. Middleware Rate Limiter

`yarn add rate-limiter-flexible`


## 112. Configurando Envio de Email com o Amazon SES - parte 1


## 113. Configurando Envio de Email com o Amazon SES - parte 2
`yarn add aws-sdk`

## 118. Amazon S3 Storage Provider
`yarn add mime`

`yarn add @types/mime -D`

## 120. Bônus: Refatorando a Classe RedisCache

## 121. Gerando o Build da Aplicação com o Babel
[Gerar o Build com o Babel](https://github.com/aluiziodeveloper/api-vendas-deploy/blob/main/babel.md)

Instalar os pacotes:
```
# Babel
@babel/cli
@babel/core
@babel/node

# Presets
@babel/preset-env
@babel/preset-typescript

# Plugins
@babel/plugin-proposal-decorators
@babel/plugin-proposal-class-properties
babel-plugin-module-resolver
babel-plugin-transform-typescript-metadata
```

Executa:
`yarn build`

