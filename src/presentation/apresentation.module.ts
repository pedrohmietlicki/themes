import { Module } from '@nestjs/common';
import ThemeController from './theme.controller';
import { DataModule } from 'src/data/data.module';
import ApiKeyService from 'src/service/api_key.service';
import { ThemeService } from 'src/service/theme.service';

@Module({
  imports: [DataModule,],
  controllers: [ThemeController],
  providers: [ApiKeyService,ThemeService],
  exports:[ DataModule]
})
export class PresentationModule {}
