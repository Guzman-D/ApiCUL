import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty({
        message: "Campo requerido"
    })
    task_category_id: number;
     @IsNotEmpty({
        message: "Campo requerido"
    })
    task_status_id: number;

     @IsNotEmpty({
        message: "Campo requerido"
    })
    user_id: number;

     @IsNotEmpty({
        message: "Campo requerido"
    })
    description: string;

     @IsNotEmpty({
        message: "Campo requerido"
    })
    color: string;
}
