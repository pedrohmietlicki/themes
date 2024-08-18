import { ApiProperty } from "@nestjs/swagger";
import { IsObjectId } from "class-validator-mongo-object-id";

export class CreateThemeDto {
  @ApiProperty({
    description: "Nome do cliente",
    example: "Randoncorp",
  })
  customer_name: string;

  @ApiProperty({
    description: "Cor de fundo principal",
    example: "#444989",
  })
  bg_color: string;
  @ApiProperty({
    description: "Configurações de cor do checkbox",
    type: Object,
    properties: {
      color: {
        description: "Cor do checkbox",
        example: "#F79433",
      },
      hover: {
        description: "Cor do checkbox ao passar o mouse",
        example: "#F26522",
      },
    },
  })
  checkbox: {
    color: string;
    hover: string;
  };
  @ApiProperty({
    description: 'Configurações de cor dos inputs',
    type: Object,
    properties: {
      focus: {
        description: 'Cor do input em foco',
        example: '#161438',
      },
      text: {
        description: 'Cor do texto dentro do input',
        example: '#283778',
      },
    },
  })
  input: {
    focus: string;
    text: string;
  };
  @ApiProperty({
    description: 'Cor do loader',
    example: '#ED0973',
  })
  loader_color: string;
  @ApiProperty({
    description: 'Configurações de cor do botão primário',
    type: Object,
    properties: {
      color: {
        description: 'Cor do botão primário',
        example: '#EE3C8A',
      },
      text: {
        description: 'Cor do texto no botão primário',
        example: '#FFFFFF',
      },
      hover_bg: {
        description: 'Cor de fundo do botão primário ao passar o mouse',
        example: '#BC075B',
      },
      hover_text: {
        description: 'Cor do texto no botão primário ao passar o mouse',
        example: '#FFFFFF',
      },
    },
  })
  primary_button: {
    color: string;
    text: string;
    hover_bg: string;
    hover_text: string;
  };
  @ApiProperty({
    description: 'Configurações de cor do botão secundário',
    type: Object,
    properties: {
      color: {
        description: 'Cor do botão secundário',
        example: '#FFFFFF',
      },
      text: {
        description: 'Cor do texto no botão secundário',
        example: '#444989',
      },
      hover_bg: {
        description: 'Cor de fundo do botão secundário ao passar o mouse',
        example: '#283778',
      },
      hover_text: {
        description: 'Cor do texto no botão secundário ao passar o mouse',
        example: '#FFFFFF',
      },
    },
  })
  secondary_button: {
    color: string;
    text: string;
    hover_bg: string;
    hover_text: string;
  };
  @ApiProperty({
    description: 'Cor do texto geral',
    example: '#283778',
  })
  text_color: string;
  @ApiProperty({
    description: 'Cor usada para ferramentas e ícones',
    example: '#ED0973',
  })
  tools_color: string;
  @ApiProperty({
    description: 'Rótulo do prompt',
    example: 'Descreva o que você gostaria de criar:',
  })
  label: string;
  @ApiProperty({
    description: 'Exemplo de entrada para o prompt',
    example: 'Ex: uma fantasia de super-heroi',
  })
  example: string;
  @ApiProperty({
    description: 'Prompt para sistema, incluindo detalhes técnicos',
    example: '4k resolution, canon 4d, f1.4',
  })
  prompt_system: string;
  @ApiProperty({
    description: 'Prompt para evitar certos aspectos indesejados',
    example: 'Dystopian, pollution, conflict, low quality. people in background, extra fingers, ',
  })
  negative_prompt: string;
  @ApiProperty({
    description: 'URL do logo do cliente',
    example: 'https://aidraw.blob.core.windows.net/assets/logo_db_vertical.png',
  })
  customer_logo: string;
}
export class UpdateThemeDto {
    @ApiProperty({
        description: "Nome do cliente",
        example: "Randoncorp",
      })
      customer_name?: string;
    
      @ApiProperty({
        description: "Cor de fundo principal",
        example: "#444989",
      })
      bg_color?: string;
      @ApiProperty({
        description: "Configurações de cor do checkbox",
        type: Object,
        properties: {
          color: {
            description: "Cor do checkbox",
            example: "#F79433",
          },
          hover: {
            description: "Cor do checkbox ao passar o mouse",
            example: "#F26522",
          },
        },
      })
      checkbox?: {
        color: string;
        hover: string;
      };
      @ApiProperty({
        description: 'Configurações de cor dos inputs',
        type: Object,
        properties: {
          focus: {
            description: 'Cor do input em foco',
            example: '#161438',
          },
          text: {
            description: 'Cor do texto dentro do input',
            example: '#283778',
          },
        },
      })
      input?: {
        focus: string;
        text: string;
      };
      @ApiProperty({
        description: 'Cor do loader',
        example: '#ED0973',
      })
      loader_color?: string;
      @ApiProperty({
        description: 'Configurações de cor do botão primário',
        type: Object,
        properties: {
          color: {
            description: 'Cor do botão primário',
            example: '#EE3C8A',
          },
          text: {
            description: 'Cor do texto no botão primário',
            example: '#FFFFFF',
          },
          hover_bg: {
            description: 'Cor de fundo do botão primário ao passar o mouse',
            example: '#BC075B',
          },
          hover_text: {
            description: 'Cor do texto no botão primário ao passar o mouse',
            example: '#FFFFFF',
          },
        },
      })
      primary_button?: {
        color: string;
        text: string;
        hover_bg: string;
        hover_text: string;
      };
      @ApiProperty({
        description: 'Configurações de cor do botão secundário',
        type: Object,
        properties: {
          color: {
            description: 'Cor do botão secundário',
            example: '#FFFFFF',
          },
          text: {
            description: 'Cor do texto no botão secundário',
            example: '#444989',
          },
          hover_bg: {
            description: 'Cor de fundo do botão secundário ao passar o mouse',
            example: '#283778',
          },
          hover_text: {
            description: 'Cor do texto no botão secundário ao passar o mouse',
            example: '#FFFFFF',
          },
        },
      })
      secondary_button?: {
        color: string;
        text: string;
        hover_bg: string;
        hover_text: string;
      };
      @ApiProperty({
        description: 'Cor do texto geral',
        example: '#283778',
      })
      text_color?: string;
      @ApiProperty({
        description: 'Cor usada para ferramentas e ícones',
        example: '#ED0973',
      })
      tools_color?: string;
      @ApiProperty({
        description: 'Rótulo do prompt',
        example: 'Descreva o que você gostaria de criar:',
      })
      label?: string;
      @ApiProperty({
        description: 'Exemplo de entrada para o prompt',
        example: 'Ex: uma fantasia de super-heroi',
      })
      example?: string;
      @ApiProperty({
        description: 'Prompt para sistema, incluindo detalhes técnicos',
        example: '4k resolution, canon 4d, f1.4',
      })
      prompt_system?: string;
      @ApiProperty({
        description: 'Prompt para evitar certos aspectos indesejados',
        example: 'Dystopian, pollution, conflict, low quality. people in background, extra fingers, ',
      })
      negative_prompt?: string;
      @ApiProperty({
        description: 'URL do logo do cliente',
        example: 'https://aidraw.blob.core.windows.net/assets/logo_db_vertical.png',
      })
      customer_logo?: string;
    
}
export class CreateThemeDtoResponse {
  @ApiProperty()
  id: string;
}
export class FindThemeDtoParams {
  @ApiProperty()
  @IsObjectId({
    message: "Não é um id válido",
  })
  id: string;
}
export class FindThemeDtoResponse extends CreateThemeDto {
  @ApiProperty()
  _id: string;

}
