import React from 'react';
import { User, EnvelopeSimple, Lock } from 'phosphor-react';

const CadastroForm = () => {
  return (
    <form className='flex flex-1 flex-col gap-8 justify-center p-14 w-1/2'>
      <div className='text-white leading-loose'>
        <h1 className='font-bold text-4xl'> Faça seu Login </h1>
        <span className='text-xl'> Faça seu login e make the change._ </span>
      </div>
      <div className='flex flex-row items-center gap-2 bg-transparent border-b-secondary border-opacity-30 border-b-2'>
        <User
          weight='fill'
          size={20}
          className='text-secondary'
        />
        <input
          type='text'
          placeholder='Nome Completo'
          className='flex text-xl flex-1 text-white bg-transparent border-none outline-none'
        />
      </div>

      <div className='flex flex-row items-center gap-2 bg-transparent border-b-secondary border-opacity-30 border-b-2'>
        <EnvelopeSimple
          weight='fill'
          size={20}
          className='text-secondary'
        />
        <input
          type='text'
          placeholder='E-mail'
          className='flex text-xl flex-1 text-white bg-transparent border-none outline-none'
        />
      </div>

      <div className='flex flex-row items-center gap-2 bg-transparent border-b-secondary border-opacity-30 border-b-2'>
        <Lock
          weight='fill'
          size={20}
          className='text-secondary'
        />
        <input
          type='text'
          placeholder='Password'
          className='flex text-xl flex-1 text-white bg-transparent border-none outline-none'
        />
      </div>

      <button className='bg-primary text-white px-6 py-2 rounded-full hover:opacity-80'>
        Criar minha conta
      </button>

      <div>
        <span className='text-white text-lg'>
          {`Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas
          de Privacidade e os Termos de Uso da DIO.`}
        </span>

        <div className='flex flex-row justify-between items-center font-bold text-white mt-4'>
          <span>
            Já tenho conta. <span className='text-green-500'>Fazer login</span>
          </span>
        </div>
      </div>
    </form>
  );
};

export default CadastroForm;
