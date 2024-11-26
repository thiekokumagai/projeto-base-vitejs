import { ActionIconButton } from "../components/ActionIconButton";
import { ArrowLeftCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ServicosEmDestaque } from "../components/ServicosEmDestaque";
import { Footer } from "../components/Footer";
const Services = () => {
  const navigate = useNavigate();
    return (
      <div className="relative bg-[#f5f5f5]">
          <div className="w-full h-full relative overflow-hidden dark:bg-[#373737]">
              <div className="flex w-full h-[1920px]  flex-col justify-between">
                  <div className="w-full h-[380px] relative">
                    <img 
                      src='/images/logo.png'
                      alt="Logo"
                      data-nimg="fill"
                      className="px-4 pt-8 w-full"
                      />
                  </div>
                  <div className="flex w-full justify-center pt-4 flex-col items-center gap-4 px-32 ">
                    <div className="flex w-full justify-between pt-20">
                      <ActionIconButton
                        icon={ArrowLeftCircleIcon}
                        color={"#1f5da7"}
                        text="VOLTAR"
                        onClick={() => navigate("/")}
                      />
                      <ActionIconButton
                        icon={XCircleIcon}
                        color={"#AF0000"}
                        text="ENCERRAR"
                        onClick={() => navigate("/closeService")} // Navegação adaptada
                      />
                    </div>
                  </div>
                  <div className="flex pt-5 h-[1400px]">
                    <div className="flex flex-col w-full">
                        <div className="flex w-full flex-col items-center text-center">
                          <span className="font-montserrat text-[38px] text-[#202020] dark:text-white font-bold">
                            Serviços em destaque
                          </span>
                          <span className="mt-2 font-montserrat text-[18px] text-[#202020] dark:text-white">
                            Explore os serviços mais populares por categoria ou acesse todos os serviços.
                          </span>
                        </div>
                        <ServicosEmDestaque />
                      </div>
                  </div>
              </div>
              <Footer/>
          </div>
      </div>
    );
  };
  
  export default Services;