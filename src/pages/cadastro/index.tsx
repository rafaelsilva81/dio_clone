import Image from 'next/image';
import homeImg from '../../assets/home_img.png';
import Head from 'next/head';
import Header from '../../components/header';
import Container from '../../components/container';
import LoginForm from '../../components/login_form';
import CadastroForm from '../../components/cadastro_form';

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>Dio Clone</title>
      </Head>
      <main className='min-h-screen flex flex-col'>
        <Header />

        <Container>
          <section className='flex flex-1 flex-col gap-4 p-8 w-1/2'>
            <h1 className='text-3xl text-white font-bold leading-snug'>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </h1>
          </section>

          <CadastroForm />
        </Container>
      </main>
    </>
  );
}
