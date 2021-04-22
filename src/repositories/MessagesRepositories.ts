import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesRepositories extends Repository<Message> {}

export { MessagesRepositories };
