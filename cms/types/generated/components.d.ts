import type { Schema, Struct } from '@strapi/strapi';

export interface MainPageAboutUsBlock extends Struct.ComponentSchema {
  collectionName: 'components_main_page_about_us_blocks';
  info: {
    displayName: 'aboutUsBlock';
    icon: 'question';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    firstNumber: Schema.Attribute.String;
    firstText: Schema.Attribute.Text;
    secondNumber: Schema.Attribute.String;
    secondText: Schema.Attribute.Text;
    thirdNumber: Schema.Attribute.String;
    thirdText: Schema.Attribute.Text;
  };
}

export interface MainPageAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_main_page_advantages';
  info: {
    displayName: 'advantages';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'main-page.about-us-block': MainPageAboutUsBlock;
      'main-page.advantages': MainPageAdvantages;
    }
  }
}
