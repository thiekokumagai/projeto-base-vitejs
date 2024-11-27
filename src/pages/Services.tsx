import { ActionIconButton } from "../components/ActionIconButton";
import { ArrowLeftCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ServicosEmDestaque } from "../components/ServicosEmDestaque";
import { Footer } from "../components/Footer";
const Services = () => {
  const navigate = useNavigate();
    return (
      <div className="relative bg-[#f5f5f5] dark:bg-[#373737]">
          <div className="w-full h-full relative overflow-hidden ">
              <div className="flex w-full h-[1920px]  flex-col justify-between">
                  <div className="w-full h-[350px] relative">
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
                  <div className="px-32 py-8 pb-[112px]">
                    <div className="w-full max-h-[430px] flex items-center justify-start flex-col relative gap-6">
                      <div className="relative w-[182px] h-[45px] block">
                          <img 
                            src="/images/logo-ada.png"
                            alt="Logo"
                            data-nimg="fill"
                            className="object-contain"
                            />
                      </div>
                      <div className="pl-24">
                        <div className="flex w-[620px] max-h-[180px] min-h-[150px] h-full border bg-white rounded-3xl shadow overflow-y-auto">
                          <div className="text-black w-full h-full px-14 py-8 text-justify text-[17px] flex flex-col prose-strong:font-black prose-p:font-normal gap-2">
                            <p>Olá! Eu sou a <strong>ADA</strong> e estou aqui para te ajudar.</p>
                            <p>Se esta for a sua primeira vez usando o totem de autoatendimento e precisar de ajuda, clique no botão no cano inferior esquerdo para mais informações.</p>
                          </div>
                        </div>
                      </div>
                    <div className="absolute w-[230px] h-[330px] -bottom-8 -left-14 z-20">
                      <img 
                      src="/images/welcome-ada.png"
                      alt="Logo"
                      data-nimg="fill"
                      className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Footer/>
               <div
                  className="absolute bottom-[108px] left-8 z-30 w-[120px] h-[100px]"
                  onClick={() => navigate("/chatBot")}
                >
                  <img 
                    src="/images/chat-ada.png"
                    alt="Logo"
                    data-nimg="fill"
                    className="object-contain"
                    />
            </div>
          </div>
      </div>
    );
  };
  
  export default Services;