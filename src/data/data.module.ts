import { MongooseModule } from "@nestjs/mongoose";
import { Theme, ThemeSchema } from "./schemas/theme.schema";
import { Module } from "@nestjs/common";
import { Key, KeySchema } from "./schemas/key.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: Theme.name,
        schema: ThemeSchema
    },
{
    name: Key.name,
    schema: KeySchema,
}])],
    exports:[MongooseModule]
})
export class DataModule {};