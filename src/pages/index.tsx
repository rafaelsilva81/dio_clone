import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import homeImg from '../assets/home_img.png';
import Container from '../components/container';
export default function Home() {
  return (
    <>
      <Head>
        <title>Dio Clone</title>
      </Head>
      <main className='min-h-screen flex flex-col'>
        <Header />

        <Container>
          <section className='flex flex-1 flex-col gap-4 w-1/2 mx-8 p-10'>
            <h1 className='text-4xl text-white font-bold leading-snug'>
              <span className='text-primary'> Implemente </span> <br /> o seu
              futuro global agora!
            </h1>

            <h3 className='text-white text-lg'>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do
              mundo e encare seu novo desafio profissional, evoluindo em
              comunidade com os melhores experts.{' '}
            </h3>

            <div className='mt-8'>
              <button className='bg-primary text-white px-6 py-2 rounded-full hover:opacity-75'>
                Começar agora
              </button>
            </div>
          </section>

          <section className='flex p-4 w-1/2'>
            <Image
              quality={100}
              src={homeImg}
              alt='Home Image'
              priority
            />
          </section>
        </Container>
      </main>
    </>
  );
}
