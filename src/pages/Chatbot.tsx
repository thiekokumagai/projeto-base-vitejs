import { ActionIconButton } from "../components/ActionIconButton";
import { ArrowLeftCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
const Chatbot = () => {
  const navigate = useNavigate();
    return (
      <div className="relative bg-[#f5f5f5] ">
          <div className="w-full h-full relative overflow-hidden ">
              <div className="flex w-full h-[1920px] flex-col">
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
                        onClick={() => navigate("/closeService")} 
                      />
                    </div>
                  </div>               
              </div>
              <Footer/>              
          </div>
      </div>
    );
  };
  
  export default Chatbot;