const Home = () => {
    return (
      <div className="w-full h-full py-20 px-16 pt-0">
        <main>
          <section className="relative w-full h-[454px]">
            <img 
                src='/images/home-topo.png'
                alt="Logo"
                className=" relative"
              />
              <div className="absolute w-[554px] h-[1824px] left-2 top-16">
                <img
                    src='/images/home-mulher.png'
                    alt="Logo"
                    className="w-full h-[1824px]"
                  />
              </div>
          </section>
          <section className="relative w-full flex flex-col gap-10 items-end">
              <div className="relative w-[451px] h-[396px] my-16">
              <img
                  src='/images/home-logo.png'
                  alt="Logo"
                  className="object-contain static w-10 h-6 text-right"
                  
                />
              </div>
              <div>
                <div className="flex flex-col px-20 py-8 justify-center font-intro text-white items-center bg-[#0058AF] rounded-3xl">
                  <div className="text-[60px] leading-none">
                    
                  </div>
                </div>
              </div>
              <div>
              </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default Home;