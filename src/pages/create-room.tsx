import { ArrowRight } from 'lucide-react'

import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
 

export function CreateRoom() {

    const navigate = useNavigate()

    function handleCreateRoom(data : FormData) {
        const theme = data.get('theme')?.toString()
        console.log(theme)

        navigate('/room/new')
    }


    return (
        <main className="h-screen flex items-center justify-center px-4">
            <div className="max-w-[450px] items-center flex flex-col gap-4">
                <img src={logo} alt="logo" className='w-10'/>
                <p className='leading-relaxed text-zinc-300 text-center'>
                    crie uma sala pública na D-Answer e priorize as perguntas mais importantes para a comunidade.
                </p>   

                <form action={handleCreateRoom} className="w-full flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-0 ring-offset-zinc-900 focus-within:ring-1">
                    <input 
                        type="text"
                        name="theme"
                        placeholder="Nome da sala" 
                        autoComplete="off"
                        className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500" 
                    />

                    <button type="submit" className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition-colors">
                        Criar sala
                        <ArrowRight className="size-4" />
                    </button>
                </form>
            </div>
        </main>
    )
}