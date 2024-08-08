import { useParams } from "react-router-dom";

import logo from "../assets/logo.png";
import { ArrowRight, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Message } from "../components/message";

export function Room() {
  const { roomId } = useParams();

  function handleShareRoom() {
    const url = window.location.href.toString();

    if (navigator.share != undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.info("O link da sala foi copiado para área de transferencia!");
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-2 px-3">
        <img src={logo} alt="logo" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          onClick={handleShareRoom}
          type="submit"
          className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form className="w-full flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-0 ring-offset-zinc-900 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
          className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
        />

        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition-colors"
        >
          Criar pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <Message
          text="O que é Golang e quais suas principais vantagens em comparação com outras
                linguagens de programação como Python, Java ou C++?"
          amoutOfReactions={50}
          answered
        />

        <Message
          text="Quais são os principais casos de uso do Golang e por que ele é escolhido em 
                vez de outras linguagens como JavaScript, Ruby ou PHP?"
          amoutOfReactions={25}
        />

        <Message
          text="Como o desempenho do Golang se compara com linguagens como Rust, C# e Java em 
                aplicações de alto desempenho e sistemas distribuídos?"
          amoutOfReactions={15}
        />
      </ol>
    </div>
  );
}
