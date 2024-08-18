import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import {
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import {
  CreateThemeDto,
  CreateThemeDtoResponse,
  FindThemeDtoParams,
  FindThemeDtoResponse,
  UpdateThemeDto,
} from "src/DTOs/theme.dto";
import KeyGuard from "src/guard/key.guard";
import { ThemeService } from "src/service/theme.service";

@ApiHeader({
  name: "x-api-key",
  description: "Key da api",
})
@ApiUnauthorizedResponse({ description: "Não foi autorizada a request" })
@UseGuards(KeyGuard)
@Controller("theme")
export default class ThemeController {
  constructor(private themService: ThemeService) {}
  @Post()
  @ApiOperation({
    description:
      "Cria um novo tema com base nas configurações fornecidas. A requisição deve incluir os detalhes do tema, como cores, configurações de botões, e outras preferências visuais. A resposta confirmará a criação do tema e fornecerá o ID gerado para futuras referências.",
  })
  @ApiResponse({
    status: 201,
    description: "O tema foi criado com sucesso",
    type: CreateThemeDtoResponse,
  })
  async create(@Body() theme: CreateThemeDto) {
    const theme_id = await this.themService.create(theme);
    return theme_id;
  }

  @Get(":id")
  @ApiOperation({
    description:
      "Recupera as informações de um tema específico com base no ID fornecido. Esta rota retorna os detalhes completos do tema, incluindo configurações de cores, botões e preferências visuais associadas ao ID especificado.",
  })
  @ApiResponse({
    status: 200,
    description: "O Tema foi encontrado",
    type: FindThemeDtoResponse,
  })
  @ApiResponse({ status: 400, description: "Não é um Id Válido" })
  @ApiResponse({ status: 404, description: "não foi encontrado um tema" })
  async find(@Param() { id }: FindThemeDtoParams) {
    const theme = await this.themService.find(id);
    return theme;
  }

  @Delete(":id")
  @HttpCode(204)
  @ApiResponse({
    status: 204,
    description: "O tema foi deletado corretamente",
  })
  @ApiOperation({
    description:
      "Remove um tema específico com base no ID fornecido. Esta rota exclui permanentemente o tema do sistema.",
  })
  @ApiResponse({ status: 400, description: "Não é um Id Válido" })
  @ApiResponse({ status: 404, description: "não foi encontrado um tema" })
  async drop(@Param() { id }: FindThemeDtoParams): Promise<void> {
    await this.themService.delete(id);
  }
  @Patch(":id")
  @HttpCode(204)
  @ApiOperation({
    description:
      "Atualiza um tema existente com base no ID fornecido. Esta rota permite modificar todos os campos do tema, incluindo configurações de cores, botões, e outras preferências visuais.",
  })
  @ApiResponse({ status: 204, description: "O tema foi alterado" })
  @ApiResponse({ status: 400, description: "Não é um Id Válido" })
  @ApiResponse({ status: 404, description: "não foi encontrado um tema" })
  async update(
    @Param() { id }: FindThemeDtoParams,
    @Body() theme: UpdateThemeDto
  ) {
    await this.themService.update(id, theme);
  }
}
