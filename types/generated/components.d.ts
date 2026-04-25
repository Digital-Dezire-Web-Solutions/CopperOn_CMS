import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_features';
  info: {
    displayName: 'about-feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedAboutIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_intros';
  info: {
    displayName: 'about-intro';
  };
  attributes: {
    aboutFeatures: Schema.Attribute.Component<'shared.about-feature', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedApplications extends Struct.ComponentSchema {
  collectionName: 'components_shared_applications';
  info: {
    displayName: 'Applications';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    displayName: 'category';
  };
  attributes: {};
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['location', 'email', 'phone']>;
    value: Schema.Attribute.String;
  };
}

export interface SharedContactItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_items';
  info: {
    displayName: 'Contact-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['phone', 'email', 'location']>;
    url: Schema.Attribute.String;
  };
}

export interface SharedCredibility extends Struct.ComponentSchema {
  collectionName: 'components_shared_credibilities';
  info: {
    displayName: 'credibility';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedDataSheet extends Struct.ComponentSchema {
  collectionName: 'components_shared_data_sheets';
  info: {
    displayName: 'DataSheet';
  };
  attributes: {
    dataSheet: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedDeploymentGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_deployment_groups';
  info: {
    displayName: 'deployment-group';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'footer-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_shared_philosophies';
  info: {
    displayName: 'philosophy';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_solution_items';
  info: {
    displayName: 'Solution-item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpecification extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    displayName: 'Specification';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedStandard extends Struct.ComponentSchema {
  collectionName: 'components_shared_standards';
  info: {
    displayName: 'Standard';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-feature': SharedAboutFeature;
      'shared.about-intro': SharedAboutIntro;
      'shared.applications': SharedApplications;
      'shared.category': SharedCategory;
      'shared.contact-info': SharedContactInfo;
      'shared.contact-item': SharedContactItem;
      'shared.credibility': SharedCredibility;
      'shared.data-sheet': SharedDataSheet;
      'shared.deployment-group': SharedDeploymentGroup;
      'shared.feature': SharedFeature;
      'shared.footer-link': SharedFooterLink;
      'shared.items': SharedItems;
      'shared.media': SharedMedia;
      'shared.philosophy': SharedPhilosophy;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.solution-item': SharedSolutionItem;
      'shared.specification': SharedSpecification;
      'shared.standard': SharedStandard;
      'shared.value': SharedValue;
    }
  }
}
