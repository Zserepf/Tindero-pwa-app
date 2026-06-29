import Link from "next/link";
import { Calculator, NotebookPen, TrendingDown, BarChart3 } from 'lucide-react';


export default function PandingPage(){
  return(
    <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-center">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/50 p-4 flex justify-between items-center shadow-sm">
          <Link href="/" className="font-black text-xl tracking-wider hover:text-orange-600 transition-colors">
            Tindero
          </Link>
          <div className="flex gap-4 font-bold text-sm items-center">
            <Link href="/login" className="hover:bg-amber-700 transition-colors bg-amber-600 text-white font-bold py-2 px-6 rounded-full">
              Log In
            </Link>
            <Link href="/signup" className="hover:text-orange-600 transition-colors border-2 border-amber-600 py-2 px-6 rounded-full ">
            Sign Up
            </Link>
          </div>
        </nav>

      <h1 className="text-3xl font-black text-orange-600 mb-1 pt-32">
        Welcome to Tindero
      </h1>
      <p className="text-xl font-extrabold text-amber-800">
        ᜆᜒᜈ᜔ᜇᜒᜇᜓ
      </p>
      <p className="text-l font-regular mb-2 text-amber-800">
        /ti n de ro/
      </p>

      <p className="text-lg font-bold text-amber-800 text-shadow-white mb-4">
        Your one-stop tool for filipino vendors! Manage your business anytime, anywhere.
      </p>

      <div className="flex gap-4 mb-4">
      <Link href="/signup" 
      className="bg-transparent border-2 border-orange-600 hover:bg-orange-900 hover:border-orange-900 text-orange-600 font-bold py-2 px-9 rounded-full">
        Get Started for Free!
      </Link> 
      </div>
      

      {/*FEATURES SECTION*/}
      <div className="w-full max-w-4xl px-4 mt-16 mb-16 mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 border-2 border-orange-600 rounded-xl flex flex-col items-start text-left">
            <Calculator className="text-orange-600 mb-4" size={36} />
            <h3 className="font-bold text-orange-600 text-lg mb-2">Benta & Sukli Calculator</h3>
            <p className="text-gray-600 text-sm">
              I-record ang pasok ng pera at i-auto-compute ang sukli ng customer nang walang palya.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-orange-600 flex flex-col items-end text-right hover:shadow-md transition-shadow">
            <NotebookPen className="text-orange-600 mb-4" size={36} />
            <h3 className="font-bold text-orange-600 text-lg mb-2">Utang Monitor</h3>
            <p className="text-gray-600 text-sm">
              I-track kung sino ang umutang at magkano ang kailangang singilin.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-orange-600 flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <TrendingDown className="text-orange-600 mb-4" size={36} />
            <h3 className="font-bold text-orange-600 text-lg mb-2">Gastos & Puhunan</h3>
            <p className="text-gray-600 text-sm">
              Bantayan ang labas ng pera. Keep track of your daily expenses at puhunan.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-orange-600 flex flex-col items-end text-right hover:shadow-md transition-shadow">
            <BarChart3 className="text-orange-600 mb-4" size={36} />
            <h3 className="font-bold text-orange-600 text-lg mb-2">Daily Kita Summary</h3>
            <p className="text-gray-600 text-sm">
              Isang pindot lang, summary na agad ng daily sales at profit mo.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}