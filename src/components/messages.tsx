import { useParams } from "react-router-dom";
import { Message } from "./message";
import { getRoomMessages } from "../http/get-room-messages";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Room id is required");
  }

  const { data } = useSuspenseQuery({
    queryFn: () => getRoomMessages({ roomId }),
    queryKey: ["messages", roomId],
  });

  console.log(data);

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data.messages.map((message) => {
        return (
          <Message
            key={message.id}
            text={message.text}
            amoutOfReactions={message.amountOfReactions}
            answered = {message.answered}
          />
        );
      })}
    </ol>
  );
}
