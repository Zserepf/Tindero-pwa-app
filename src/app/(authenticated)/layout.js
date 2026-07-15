import Link from 'next/link'
import{ House, NotebookPen, TrendingDown, UserRound } from 'lucide-react';


function BottomNavigation(){
  return(
    <nav className="fixed flex gap-10 w-full bottom-0 bg-white border-t-2  border-amber-600 p-2 text-wrap justify-center z-50  ">
      <Link href="/dashboard" className="font-normal border-4 p-3 border-amber-200 flex flex-col items-center text-center">
       <House className="text-orange-600 mb-1"/>
       <label className="font-bold text-xs text-gray-600">Home</label>
      </Link>
      <Link href="/" className="font-normal border-4 p-3 border-amber-200 flex flex-col items-center text-center">
       <NotebookPen className="text-orange-600 mb-1" />
       <label className="font-bold text-xs text-gray-600">Mga Utang</label>
      </Link>
      <Link href="/" className="font-normal border-4 p-3 border-amber-200 flex flex-col items-center text-center">
       <TrendingDown className="text-orange-600 mb-1" />
       <label className="font-bold text-xs text-gray-600">Gastos</label>
      </Link>
      <Link href="/profile" className="font-normal border-4 p-3 border-amber-200 flex flex-col items-center text-center">
       <UserRound className="text-orange-600 mb-1"/>
       <label className="font-bold text-xs text-gray-600">Profile</label>
      </Link>
    </nav>

  );
}

export default function AuthenticatedLayout({ children }) {
  
  return(
    <section>
      <BottomNavigation/>
      {children}
    </section>
  );
}

