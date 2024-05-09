import { IsNotEmpty } from "class-validator";

export class CreateTaskCategoryDto {
    @IsNotEmpty({
        message: "Campo requerido"
    })
    description: string;
    @IsNotEmpty({
        message: "Campo requerido"
    })
    color: string;
}
