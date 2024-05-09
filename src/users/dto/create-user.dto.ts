import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail({},{
        message:"Formato de correo no valido"
    })
    email: string;
    @IsNotEmpty({
        message: "Campo requerido"
    })
    name: string;
    @IsNotEmpty({
        message: "Campo requerido"
    })
    lastname: string;
}
