import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_about_us_page_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    firstNumber: Schema.Attribute.String;
    firstText: Schema.Attribute.Text;
    secondNumber: Schema.Attribute.String;
    secondText: Schema.Attribute.Text;
    thirdNumber: Schema.Attribute.String;
    thirdText: Schema.Attribute.Text;
  };
}

export interface AboutUsPageOffice extends Struct.ComponentSchema {
  collectionName: 'components_about_us_page_offices';
  info: {
    displayName: 'office';
  };
  attributes: {
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lat: Schema.Attribute.Decimal;
    lon: Schema.Attribute.Decimal;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsPagePersonal extends Struct.ComponentSchema {
  collectionName: 'components_about_us_page_personals';
  info: {
    displayName: 'personal';
  };
  attributes: {
    description: Schema.Attribute.Text;
    fio: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.Text;
  };
}

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
      'about-us-page.banner': AboutUsPageBanner;
      'about-us-page.office': AboutUsPageOffice;
      'about-us-page.personal': AboutUsPagePersonal;
      'main-page.about-us-block': MainPageAboutUsBlock;
      'main-page.advantages': MainPageAdvantages;
    }
  }
}
