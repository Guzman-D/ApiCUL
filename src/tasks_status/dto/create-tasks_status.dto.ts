import { IsNotEmpty } from "class-validator";

export class CreateTasksStatusDto {
    @IsNotEmpty({
        message: "Campo requerido"
    })
    description: string;
}
