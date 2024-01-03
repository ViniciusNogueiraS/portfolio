
import React from 'react';

import IExperiencia from "../types/Experiencia";
import IProjeto from "../types/Projeto";
import ISkill from "../types/Skill";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export const experiencias: IExperiencia[] = [
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            title: "Agência M3 (Atual Cadastra Company)",
            text: "Com quase três anos trabalhando com e-commerces na plataforma Vtex, pude aprender muito não somente com e-commerces e com a plataforma Vtex, mas também e principalmente, com programação de uma forma geral, a usar as melhores técnicas, a estar íntimo das tecnologias Web, a trabalhar em equipe e lidar com as exigências do mercado.",
            date: "Desde de março de 2021..."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            title: "Graduação em Análise e Desenvolvimento de Sistemas - Estácio",
            text: "Este curso me permitiu entender a tecnologia da informação através de uma ótica muito abrangente, estudando equipamentos de Hardware, infraestrutura de redes de computadores, segurança de informação, técnicas de programação e algoritmos entre muitas outras matérias que foram fundamentais na minha evolução profissional.",
            date: "De 2018 a 2020."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            title: "Pós-graduação em Análise e Desenvolvimento de Programas - Descomplica",
            text: "Este curso foi muito importante para atualizar os meus conhecimentos na área de T.I. que é a que mais se desnvolve e se modifica no mercado. Aprendi sobre as novas metodologias mais modernas de empreendimento nas áreas de Aplicações em Nuvem e Inteligência Artificial, além de estudar temas importantes como Big Data e Internet das Coisas.",
            date: "Em 2023."
        }
    }
]
export const projetos: IProjeto[] = [
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Catálogo de Produtos - Quero Esse!",
            text: "Este é um projeto que desenvolvi em React utilizando TypeScript. Usei o serviço do Google, Firebase para persistência dos dados. Tem como objetivo demonstrar a possibilidade de um vendedor que utiliza o WhatsApp, poder publicar seu catálogo de produtos na internet de forma intuitiva e com uma conexão direta entre o catálogo e seu contato no aplicativo de mensagens."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Chat Socket.io - Global Socket Chat",
            text: "É servidor node-express com a biblioteca Socket.io, e também age como front-end ao servir os arquivos de interação com o usário final. É um projeto simples, porém demonstra as possibilidades de comunicação imediata atráves de um servidor que utiliza sockets."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "REST API Node.js",
            text: "Está é uma aplicação para back-end que utiliza TypeScript para melhor controle dos tipos de dados e estrutura do códigp, Restify para criar o servidor, declarar as rotas e gerenciá-las e o Prisma que uma ferramenta poderosa para fazer a ponte entre o back-end e o SGBD utilizado."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "REST API Python",
            text: "Está é uma aplicação para back-end não muito elaborada que utiliza o Python como código fonte. Declarei uma estrutura CRUD simples com rotas públicas e restritas para demonstrar as possibilidades da API."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Aplicação Front-end React - Net Balance",
            text: "Este é outro projeto React que fiz apenas para treinar minhas habilidades em React. A aplicação permite ao usuário criar diversas carteiras e registrar as entradas e saídas de valores, ficando tudo armazenado no Local Storage do navegador no usuário."
        }
    }
]
export const skills: ISkill[] = [
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "HTML5"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "CSS e Sass"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "JavaScript e TypeScript"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "Git"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "React"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "Vue.js"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "Socket.io"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'22px'}/>,
        obj: {
            title: "Python"
        }
    }
]