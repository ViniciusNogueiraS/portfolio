
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
            title: "Agência M3",
            text: "A mais de dois anos e meio trabalhando com e-commerces na a plataforma Vtex...",
            date: "Desde 03 2021..."
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            title: "Análise e Desnvolvimento de Sistemas - Estácio",
            text: "",
            date: "De 2018 a 2020."
        }
    }
]
export const projetos: IProjeto[] = [
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Lorem ipsum",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a "
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Lorem ipsum",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a "
        }
    },
    {
        skeleton: <Skeleton count={4} height={'14px'}/>,
        obj: {
            image: "",
            title: "Lorem ipsum",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a "
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
    }
]