import { Module } from "@nestjs/common";
import { AppControler } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database.module";


@Module({
    controllers: [AppControler],
    providers: [AppService],
    imports: [DatabaseModule]
})
export class AppModule {}