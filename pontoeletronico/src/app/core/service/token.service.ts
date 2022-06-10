import { TokenDTO } from "../model/token-dto";

export class TokenService{

    generate(){
       let token = new TokenDTO;

       token.type = ""+localStorage.getItem("username");
       token.token = ""+localStorage.getItem("Jwt");
        return token;
    }

}