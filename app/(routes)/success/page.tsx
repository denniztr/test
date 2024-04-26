import Link from "next/link";

export default function Home() {
  return (
    <main className='w-full h-full bg-primaryColor flex justify-center items-center'>
      <section className="text-center">
        <h1 className="mb-6 text-2xl text-white">Спасибо за заказ!</h1>
        <Link href='/' className="text-gray-300 hover:underline">Вернуться на главную</Link>
      </section>
    </main>
  );
}