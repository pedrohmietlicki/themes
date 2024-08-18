import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { generate } from "generate-password";
import { Connection, Model, ObjectId } from "mongoose";
import { Theme } from "src/data/schemas/theme.schema";
import { UpdateThemeDto } from "src/DTOs/theme.dto";

@Injectable()
export class ThemeService {
  constructor(@InjectModel(Theme.name) private themeModel: Model<Theme>) {}
  async create(theme: Theme): Promise<{ id: string }> {
    const createdTheme = new this.themeModel(theme);
    await createdTheme.save();
    return {
      id: createdTheme._id,
    };
  }

  async find(id: string): Promise<Theme> {
    const theme = await this.themeModel.findById(id).exec();
    if (theme === null) throw new NotFoundException("Tema não encontrado");
    return theme.toObject();
  }
  async delete(id: string): Promise<void> {
    const themeDeleteResult = await this.themeModel
      .deleteOne({ _id: id })
      .exec();
    if (themeDeleteResult.deletedCount < 1)
      throw new NotFoundException("Tema não encontrado");
  }
  async update(id: string, theme: UpdateThemeDto): Promise<void> {
    const themeResult  = await this.themeModel.updateOne({_id:id}, theme).exec();
    if (themeResult.matchedCount < 1) throw new NotFoundException("Tema não encontrado");
   
  }

}
