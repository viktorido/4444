import { Context, Hono, type TypedResponse} from "hono";
import { UsersRepository} from "./users.repository";
export class AuthController {
    consrtuctor(private readonly repository: UsersRepository) { }
    
    public routes(): Hono {
        return new Hono();
    }
}
