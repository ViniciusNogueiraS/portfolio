
import React from 'react';

import IExperiencia from "../types/Experiencia";
import IProjeto from "../types/Projeto";
import ISkill from "../types/Skill";

import Skeleton from 'react-loading-skeleton';

export const experiencias: IExperiencia[] = [
    {
        skeleton: <Skeleton count={1} height={'250px'}/>,
        obj: {
            title: "Agência M3",
            text: "A mais de dois anos e meio trabalhando com e-commerces na a plataforma Vtex...",
            date: "Desde 03 2021..."
        }
    },
    {
        skeleton: <Skeleton count={1} height={'250px'}/>,
        obj: {
            title: "Análise e Desnvolvimento de Sistemas - Estácio",
            text: "",
            date: "De 2018 a 2020."
        }
    }
]
export const projetos: IProjeto[] = [
    {
        skeleton: <Skeleton count={1} height={'250px'}/>,
        obj: {
            image: "",
            title: "",
            text: ""
        }
    },
    {
        skeleton: <Skeleton count={1} height={'250px'}/>,
        obj: {
            image: "",
            title: "",
            text: ""
        }
    },
]
export const skills: ISkill[] = [
    {
        skeleton: <Skeleton count={1} height={'14px'}/>,
        obj: {
            title: "🔶 HTML5"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'14px'}/>,
        obj: {
            title: "✳️ CSS e Sass"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'14px'}/>,
        obj: {
            title: "✴️ JavaScript e TypeScript"
        }
    },
    {
        skeleton: <Skeleton count={1} height={'14px'}/>,
        obj: {
            title: "🔄 Git"
        }
    }
]