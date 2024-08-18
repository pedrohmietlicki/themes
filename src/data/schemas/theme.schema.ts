import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ThemeDocument =  HydratedDocument<Theme>;

@Schema()
export class Theme {
    _id?: string;
    @Prop()
  customer_name: string;

  @Prop()
  bg_color: string;

  @Prop({
    type: Object,
    properties: {
      color: { type: String },
      hover: { type: String },
    },
  })
  checkbox: {
    color: string;
    hover: string;
  };

  @Prop({
    type: Object,
    properties: {
      focus: { type: String },
      text: { type: String },
    },
  })
  input: {
    focus: string;
    text: string;
  };

  @Prop()
  loader_color: string;

  @Prop({
    type: Object,
    properties: {
      color: { type: String },
      text: { type: String },
      hover_bg: { type: String },
      hover_text: { type: String },
    },
  })
  primary_button: {
    color: string;
    text: string;
    hover_bg: string;
    hover_text: string;
  };

  @Prop({
    type: Object,
    properties: {
      color: { type: String },
      text: { type: String },
      hover_bg: { type: String },
      hover_text: { type: String },
    },
  })
  secondary_button: {
    color: string;
    text: string;
    hover_bg: string;
    hover_text: string;
  };

  @Prop()
  text_color: string;

  @Prop()
  tools_color: string;

  @Prop()
  label: string;

  @Prop()
  example: string;

  @Prop()
  prompt_system: string;

  @Prop()
  negative_prompt: string;

  @Prop()
  customer_logo: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme)