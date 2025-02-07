import Image from "next/image";
import about1Img from '../../../public/dogz (1).png'
import about2Img from '../../../public/cat1.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do gatinho"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Até que alguém tenha amado um animal, uma parte de sua alma permanece adormecida. Nós acreditamos nisso e também acreditamos no fácil acesso a coisas que fazem bem para a nossa mente, corpo e espírito. Com uma oferta inteligente, suporte excepcional e um checkout seguro, você está em boas mãos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-green-500"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                  href="https://www.google.com/maps/place"
                  target="_blank"
                  className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                  <MapPin className="w-5 h-5 text-black" />
                  Endereço da loja
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}