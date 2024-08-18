import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("DB Customer Themes")
    .setDescription(
      "Este projeto é uma API de gerenciamento de temas para customização visual de aplicativos e plataformas. A API permite a criação, leitura, atualização e exclusão de temas, oferecendo flexibilidade para personalizar a aparência com base em preferências específicas. Os temas incluem configurações detalhadas como cores de fundo, botões, caixas de seleção, inputs, e mais, permitindo um controle completo sobre o design visual."
    )
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
