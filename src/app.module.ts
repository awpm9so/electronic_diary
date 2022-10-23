import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppControler } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    controllers: [AppControler],
    providers: [AppService],
    imports: [MongooseModule.forRoot('mongodb+srv://admin:awDrgY129@cluster0.sqwuj1u.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}