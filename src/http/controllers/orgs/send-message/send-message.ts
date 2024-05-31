import { makeSendMessageUseCase } from "@/domain/factory/make-send-message-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function sendMessage(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sendMessageBodySchema = z.object({
    petId: z.string(),
  });

  const { petId } = sendMessageBodySchema.parse(request.body);

  try {
    const sendMessageUseCase = makeSendMessageUseCase();

    const message = await sendMessageUseCase.execute({
      petId,
    });

    return reply.status(200).send({ message });
  } catch (error) {
    return reply.status(404).send({ message: error });
  }
}
