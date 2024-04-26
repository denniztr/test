import Image from 'next/image';
import Form from '@/app/_components/Form';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="bg-primaryColor h-[470px]">
        <section className="w-[1100px] m-auto relative">
          <header className="py-5 flex justify-between items-center">
            <div className="relative w-14 h-14">
              <Image src="/logo.svg" fill alt="logo" />
            </div>
            <nav className="flex gap-6 text-white font-semibold">
              <Link href="/">Заказать кофе</Link>
              <Link href="/">Забронировать столик</Link>
              <Link href="/">Меню</Link>
            </nav>
          </header>
          <div className='absolute text-bold text-8xl tracking-wide text-transparent top-1/2 -transform translate-y-1/2'>
            <h1 className='stroke-title'>Закажи свой <br/> <span className='text-white'>Лучший кофе</span></h1>
          </div>
          <div className="absolute right-0">
            <div className="relative w-[400px] h-[456px]">
              <Image src="/ACupOfCoffee.png" fill alt="ACupOfCoffee" />
            </div>
          </div>
        </section>
      </main>
      <section className="w-[1100px] m-auto mt-6 space-y-6">
        <h2>Оставьте заявку на обратный звонок</h2>
        <Form />
      </section>
    </>
  );
}
