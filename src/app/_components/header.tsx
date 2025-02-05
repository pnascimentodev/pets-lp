import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.png";
import catImg from "../../../public/cat-dog-hero.png";
import Image from "next/image";

export function Header() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
    
          <div>
            <Image
              src={dogImg}
              alt='Foto do cachorro'
              fill
              sizes='100vw'
              priority
              className='object-cover opacity-60 lg:hidden'
            />
            <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
          </div>
    
          <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
    
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
              <div className="space-y-6">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                  data-aos="fade-down"
                >
                  Seu pet merece o melhor! Cuidado, carinho e atenção especial.
                </h1>
                <p className=" lg:text-lg" data-aos="fade-right">
                  Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                </p>
    
    
                <a
                  data-aos="fade-up"
                  data-aos-delay="500"
                  target='_blank'
                  href="#"
                  className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                >
                  <WhatsappLogo className='w-5 h-5' />
                  Contato via WhatsApp
                </a>
    
                <div className="mt-8">
                  <p className="text-sm mb-4">
                    <b className="bg-black text-white px-2 py-1 rounded-md">10%</b> de desconto em compras acima de R$150.
                  </p>
                </div>
    
              </div>
    
              <div className="hidden md:block h-full relative overflow-hidden">
  <Image
    src={dogImg}
    alt="Foto do dog"
    className="object-contain scale-125 translate-y-[-0%]"
    fill
    sizes="(max-width: 768px) 0vw, 50vw"
    quality={100}
    priority
  />
</div>

    
            </article>
    
          </div>
    
    
        </section>
      )
    }
