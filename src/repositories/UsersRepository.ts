import { EntityRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
