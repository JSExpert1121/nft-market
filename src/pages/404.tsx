import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='space-x-4, my-3'>Oops</h1>
        <h4 className='my-2 font-semibold'>404 - Page not found</h4>
        <p className='space-x-1 leading-[1.6]'>
          The page you&apos;re looking for doesn&apos;t exist. <br />
          <span onClick={goBack} role='button' className='text-blue-500'>
            Go back
          </span>, or visit <Link href='/' className='text-blue-500'>home page</Link>
        </p>
      </div>
    </div>
  )
};

export default NotFound;
