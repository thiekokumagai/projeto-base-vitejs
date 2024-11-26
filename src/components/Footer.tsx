export const Footer = () => { 
  return (
    <div className="absolute bottom-0 left-0 w-full z-30">
      <div className="bg-[#0058AF] flex flex-row justify-between items-center px-8 py-2 z-30 rounded-3xl mx-4 mb-2">
        <div className="relative w-[158px] h-[30px]">
          <img 
                src='/images/rodape-inovvati.png'
                alt="Logo Inovvati"
                data-nimg="fill"
                className="object-contain"
            />
        </div>
        <div className="border-r border-l border-[#D9D9D9] text-white italic h-14 justify-center flex items-center px-20 gap-2 font-light">
          <div className="relative w-[240px] h-[36px]">
            <img 
                src='/images/informacoes.png'
                alt="Logo Inovvati"
                data-nimg="fill"
                className="object-contain"
            />
          </div>
        </div>
        <div className="relative w-[153px] h-[28px]">
          <img 
              src='/images/logo-sp.png'
              alt="Logo Inovvati"
              data-nimg="fill"
              className="object-contain"
            />
        </div>
      </div>
    </div>
  );
};