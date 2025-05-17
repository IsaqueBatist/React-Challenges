import { lazy, Suspense } from "react"
import BackToHome from "../../components/BackToHome.tsx"

export default function Challenge10() {
  
  const Heavypage = lazy(() => import('../../components/Heavypage.tsx'))

  return (
        <div className='flex flex-col gap-8 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
          <BackToHome />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Challenge10</h2>
          <Suspense fallback={<p>Carregando....</p>}>
            <Heavypage />
          </Suspense>
        </div>
  )
}
