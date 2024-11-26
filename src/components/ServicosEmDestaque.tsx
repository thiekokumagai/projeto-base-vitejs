"use client";
import { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { MdGavel } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaTrafficLightSolid } from "react-icons/lia";
import { RiIdCardLine } from "react-icons/ri";
import { IoCarOutline } from "react-icons/io5";
interface Servico {
  titulo: string;
  descricao: string;
  botao: string;
  link?: string;
}

export const ServicosEmDestaque = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Populares');
 

  const categoriasComIcones: { [key: string]: { icone: JSX.Element; servicos: Servico[] } } = {
    Populares: {
      icone: <CiStar />,
      servicos: [
        {
          titulo: "Reiniciar Processo de Habilitação",
          descricao: "Recomece o processo após perder o direito de dirigir",
          botao: "Iniciar Serviço",
          link: "/reiniciar"
        },
        {
          titulo: "Licenciar Veículo",
          descricao: "Deixe o licenciamento em dia e baixe o documento do veículo",
          botao: "Iniciar Serviço",
          link: "/licenciar"
        },
        {
          titulo: "Transferir Veículo",
          descricao: "Realize a Transferência Digital do Veículo (TDV)",
          botao: "Iniciar Serviço",
          link: "/transferir"

        },
        {
          titulo: "Consultar Veículo",
          descricao: "Verifique informações e pendências do seu veículo.",
          botao: "Iniciar Serviço",
          link: "/debito"
        },
      ],
    },
    Veículos: {
      icone: <IoCarOutline />,
      servicos: [
        {
          titulo: "Licenciar Veículo",
          descricao: "Deixe o licenciamento em dia e baixe o documento do veículo",
          botao: "Iniciar Serviço",
        },
        {
          titulo: "Transferir Veículo",
          descricao: "Realize a Transferência Digital do Veículo (TDV)",
          botao: "Iniciar Serviço",
        },
        {
          titulo: "Consultar Veículo",
          descricao: "Verifique informações e pendências do seu veículo.",
          botao: "Iniciar Serviço",
        },
      ],
    },
    Habilitação: {
      icone: <RiIdCardLine />,
      servicos: [
        {
          titulo: "Reiniciar Processo de Habilitação",
          descricao: "Recomece o processo após perder o direito de dirigir",
          botao: "Iniciar Serviço",
        },
        {
          titulo: "Alterar Dados da Habilitação",
          descricao: "Atualize os dados da sua CNH facilmente",
          botao: "Iniciar Serviço",
        },
      ],
    },
    Infrações: {
      icone: <LiaTrafficLightSolid />,
      servicos: [
        {
          titulo: "Consultar Multas",
          descricao: "Verifique se há multas vinculadas ao seu veículo",
          botao: "Consultar",
        },
      ],
    },
    Educação: {
      icone: <IoSchoolOutline />,
      servicos: [
        {
          titulo: "Cursos de Educação no Trânsito",
          descricao: "Participe dos cursos e programe sua educação no trânsito",
          botao: "Iniciar Curso",
        },
      ],
    },
    Leilão: {
      icone: <MdGavel />,
      servicos: [
        {
          titulo: "Participar de Leilão",
          descricao: "Veja como participar dos próximos leilões de veículos",
          botao: "Saiba Mais",
        },
      ],
    },
  };

  const categorias = Object.keys(categoriasComIcones);

  const categoriasBaixo = [
    {
      titulo: "Veículos",
      descricao: "Acesse serviços de registro, licenciamento e documentação para seu veículo.",
      imagem: "https://novo.detran.sp.gov.br/x_mdpdd_detran_sp.categoria_veiculo.png",
    },
    {
      titulo: "Habilitação",
      descricao: "Encontre serviços para obter, renovar e atualizar sua carteira de habilitação.",
      imagem: "https://novo.detran.sp.gov.br/x_mdpdd_detran_sp.categoria_habilitacao.png",
    },
    {
      titulo: "Infrações",
      descricao: "Consulte serviços para multas, pontos na carteira e recursos de infrações.",
      imagem: "https://novo.detran.sp.gov.br/x_mdpdd_detran_sp.categoria_infracao.png",
    },
    {
      titulo: "Educação",
      descricao: "Explore serviços educativos, cursos e campanhas de segurança no trânsito.",
      imagem: "https://novo.detran.sp.gov.br/x_mdpdd_detran_sp.categoria_educacao.png",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto my-12">
      <div className="flex justify-center space-x-4 mb-12">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`px-4 py-2 border rounded-2xl ${categoriaAtiva === categoria ? 'bg-[#E6F0FC] border-[#0058AF] text-[#262828]' : ''
              }`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            <div className="flex gap-2 justify-center items-center py-1">
              <div className="text-center text-md">
                {categoriasComIcones[categoria].icone}
              </div>
              <span>{categoria}</span>
            </div>
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoriasComIcones[categoriaAtiva].servicos.map((servico: Servico, index: number) => (
          <div
            key={index}
            className="p-6 border rounded-3xl shadow-lg text-center bg-white flex flex-col"
          >
            <div className="mb-4">
              <h2 className="text-xl text-[#111414] font-bold">{servico.titulo}</h2>
            </div>

            <div className="flex-grow mb-4 text-md text-[#111414]">
              <p>{servico.descricao}</p>
            </div>

            <div
              className="mt-auto"
              onClick={() => {

                if (servico.link === "/licenciar") {
                  window.location.href = "/companies/2/5/services/9";
                }

                if (servico.link === "/debito") {
                  window.location.href = "/companies/2/5/services/8";
                }

                if (servico.link === "/transferir") {
                  window.location.href = "/companies/2/5/services/10";
                }

                if (servico.link === "/reiniciar") {
                  window.location.href = "/companies/2/5/services/11";
                }
              }}
            >
              <button className="px-4 py-2 w-full bg-[#0058AF] text-white rounded-3xl">
                {servico.botao}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-2 border border-[#0058AF] dark:border-white text-[#0058AF] dark:text-white rounded-3xl hover:bg-[#0058AF]  hover:text-white transition duration-300">
          Acessar todos os serviços
        </button>
      </div>

      <div className="max-w-screen-lg mx-auto my-4 ">
        <h2 className="text-center text-3xl font-bold mb-6">Principais categorias</h2>
        <p className="text-center text-lg mb-8">Explore as principais categorias abaixo</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center">
          {categoriasBaixo.map((categoria, index) => (
            <div
              key={index}
              className="relative bg-white border rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={categoria.imagem}
                alt={categoria.titulo}
                className="w-full object-cover mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{categoria.titulo}</h3>
                <p className="text-sm text-gray-700 mb-4">{categoria.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicosEmDestaque;