import { defineConfig } from 'unocss';
import {
  presetUno,
  presetIcons,
  transformerVariantGroup,
  presetAttributify,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
