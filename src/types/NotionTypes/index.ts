

/*
  This interface describes common attributes of all
  page properties from Notion
*/
interface BasePropertyProps {
  id: string;
  type: string;
}

export interface NotionDateProps extends BasePropertyProps {
  date: Object;
}

interface TitleProps {
  type: string;
  text: {
    content: string;
    link: string | null;
  },
  annotations: {
    bold: boolean,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean,
    color: string;
  },
  plain_text: string,
}

export interface NotionTitleProps extends BasePropertyProps {
  title: Array<TitleProps>;
}

export interface NotionCheckboxProps extends BasePropertyProps {
  checkbox: boolean;
}

export interface NotionNumberProps extends BasePropertyProps {
  number: number;
}

export interface NotionMultiSelectProps extends BasePropertyProps {
  multi_select: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}