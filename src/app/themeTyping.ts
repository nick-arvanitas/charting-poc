export interface pTabsTheme {
    transition?: {
      duration?: string;
    };
    tablist?: {
      border?: {
        width?: string;
        color?: string;
      };
      background?: string;
    };
    tab?: {
      background?: string;
      hover?: {
        background?: string;
        border?: {
          color?: string;
        };
        color?: string;
      };
      active?: {
        background?: string;
        border?: {
          color?: string;
        };
        color?: string;
      };
      border?: {
        width?: string;
        color?: string;
      };
      color?: string;
      padding?: string;
      font?: {
        weight?: string;
      };
      margin?: string;
      gap?: string;
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
    };
    tabpanel?: {
      background?: string;
      color?: string;
      padding?: string;
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
    };
    nav?: {
      button?: {
        background?: string;
        color?: string;
        hover?: {
          color?: string;
        };
        width?: string;
        focus?: {
          ring?: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
          };
        };
        shadow?: string;
      };
    };
    active?: {
      bar?: {
        height?: string;
        bottom?: string;
        background?: string;
      };
    };
  }
  
  export interface pToastTheme {
    width?: string;
    border?: {
      radius?: string;
      width?: string;
    };
    transition?: {
      duration?: string;
    };
    icon?: {
      size?: string;
    };
    content?: {
      padding?: string;
      gap?: string;
    };
    text?: {
      gap?: string;
    };
    summary?: {
      font: {
        weight?: string;
        size?: string;
      };
    };
    detail?: {
      font: {
        weight?: string;
        size?: string;
      };
    };
    close?: {
      button: {
        width?: string;
        height?: string;
        border: {
          radius?: string;
        };
        focus: {
          ring: {
            width?: string;
            style?: string;
            offset?: string;
            color?: string;
            shadow?: string;
          };
        };
      };
      icon?: {
        size?: string;
      };
    };
    blur?: {
      0?: string;
      1?: string;
      2?: string;
      3?: string;
      4?: string;
    };
    info?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    success?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    warn?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    error?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    secondary?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    contrast?: {
      background?: string;
      border: {
        color?: string;
      };
      color?: string;
      detail: {
        color?: string;
      };
      shadow?: string;
      close: {
        button: {
          hover: {
            background?: string;
          };
          focus: {
            ring: {
              color?: string;
              shadow?: string;
            };
          };
        };
      };
    };
  }
  
  export interface pTableTheme {
    transition?: {
      duration?: string;
    };
    border?: {
      color?: string;
    };
    // temprarily added headerCell as a workaround for a bug in primeng
    headerCell?: {
      background?: string;
      hover?: {
        background?: string;
        color?: string;
      };
      selected?: {
        background?: string;
        color?: string;
      };
      border?: {
        color?: string;
      };
      color?: string;
      gap?: string;
      padding?: string;
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
    };
    header?: {
      background?: string;
      border?: {
        color?: string;
        width?: string;
      };
      color?: string;
      padding?: string;
      cell?: {
        background?: string;
        hover?: {
          background?: string;
          color?: string;
        };
        selected?: {
          background?: string;
          color?: string;
        };
        border?: {
          color?: string;
        };
        color?: string;
        gap?: string;
        padding?: string;
        focus?: {
          ring?: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
          };
        };
      };
    };
    column?: {
      title?: {
        font?: {
          weight?: string;
        };
      };
      footer?: {
        font?: {
          weight?: string;
        };
      };
      resizer?: {
        width?: {
          0?: string;
          1?: string;
          2?: string;
          3?: string;
          4?: string;
          5?: string;
        };
      };
    };
    row?: {
      background?: string;
      hover?: {
        background?: string;
        color?: string;
      };
      selected?: {
        background?: string;
        color?: string;
      };
      color?: string;
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
      striped?: {
        background?: string;
      };
      toggle?: {
        button?: {
          hover?: {
            background?: string;
            color?: string;
          };
          selected?: {
            hover?: {
              background?: string;
              color?: string;
            };
          };
          color?: string;
          size?: string;
          border?: {
            radius?: string;
          };
          focus?: {
            ring?: {
              width?: string;
              style?: string;
              color?: string;
              offset?: string;
              shadow?: string;
            };
          };
        };
      };
    };
    body?: {
      cell?: {
        border?: {
          color?: string;
        };
        padding?: string;
        selected?: {
          border?: {
            color?: string;
          };
        };
      };
    };
    footer?: {
      cell?: {
        background?: string;
        border?: {
          color?: string;
        };
        color?: string;
        padding?: string;
      };
      background?: string;
      border?: {
        color?: string;
        width?: string;
      };
      color?: string;
      padding?: string;
    };
    drop?: {
      point?: {
        color?: {
          0?: string;
          1?: string;
          2?: string;
          3?: string;
          4?: string;
          5?: string;
          6?: string;
          7?: string;
          8?: string;
          9?: string;
          10?: string;
          11?: string;
          12?: string;
          13?: string;
          14?: string;
        };
      };
    };
    resize?: {
      indicator?: {
        width?: string;
        color?: string;
      };
    };
    sort?: {
      icon?: {
        color?: string;
        hover?: {
          color?: string;
        };
      };
    };
    loading?: {
      icon?: {
        size?: string;
      };
    };
    filter?: {
      inline?: {
        gap?: string;
      };
      overlay?: {
        select?: {
          background?: string;
          border?: {
            color?: string;
            radius?: string;
          };
          color?: string;
          shadow?: string;
        };
        popover?: {
          background?: string;
          border?: {
            color?: string;
            radius?: string;
          };
          color?: string;
          shadow?: string;
          padding?: string;
          gap?: string;
        };
      };
      rule?: {
        border?: {
          color?: string;
        };
      };
      constraint?: {
        list?: {
          padding?: string;
          gap?: string;
        };
        focus?: {
          background?: string;
          color?: string;
        };
        selected?: {
          background?: string;
          focus?: {
            background?: string;
            color?: string;
          };
          color?: string;
        };
        color?: string;
        separator?: {
          border?: {
            color?: string;
          };
        };
        padding?: string;
        border?: {
          radius?: string;
        };
      };
    };
    paginator?: {
      top?: {
        border?: {
          color?: string;
          width?: string;
        };
      };
      bottom?: {
        border?: {
          color?: string;
          width?: string;
        };
      };
    };
  }
  
export interface pDialogTheme {
    background?: string;
    border?: {
      color?: string;
      radius?: string;
    };
    color?: string;
    shadow?: string;
    header?: {
      padding?: string;
      gap?: string;
    };
    title?: {
      font?: {
        size?: string;
        weight?: string;
      };
    };
    content?: {
      padding?: string;
    };
    footer?: {
      padding?: string;
      gap?: string;
    };
  }
  export interface pDatepickerTheme {
    transition?: {
      duration?: string;
    };
    panel?: {
      background?: string;
      border?: {
        color?: string;
        radius?: string;
      };
      color?: string;
      shadow?: string;
      padding?: string;
    };
    header?: {
      background?: string;
      border?: {
        color?: string;
      };
      color?: string;
      padding?: string;
      font?: {
        weight?: string;
      };
      gap?: string;
    };
    title?: {
      gap?: string;
      font?: {
        weight?: string;
      };
    };
    dropdown?: {
      width?: string;
      border?: {
        color?: string;
        radius?: string;
      };
      hover?: {
        border?: {
          color?: string;
        };
        background?: string;
        color?: string;
      };
      active?: {
        border?: {
          color?: string;
        };
        background?: string;
        color?: string;
      };
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
      background?: string;
      color?: string;
    };
    input?: {
      icon?: {
        color?: string;
      };
    };
    select?: {
      month?: {
        hover?: {
          background?: string;
          color?: string;
        };
        color?: string;
        padding?: string;
        border?: {
          radius?: string;
        };
      };
      year?: {
        hover?: {
          background?: string;
          color?: string;
        };
        color?: string;
        padding?: string;
        border?: {
          radius?: string;
        };
      };
    };
    group?: {
      border?: {
        color?: string;
      };
      gap?: string;
    };
    day?: {
      view?: {
        margin?: string;
      };
    };
    week?: {
      day?: {
        padding?: string;
        font?: {
          weight?: string;
        };
        color?: string;
      };
    };
    date?: {
      hover?: {
        background?: string;
        color?: string;
      };
      selected?: {
        background?: string;
        color?: string;
      };
      range?: {
        selected?: {
          background?: string;
          color?: string;
        };
      };
      color?: string;
      width?: string;
      height?: string;
      border?: {
        radius?: string;
      };
      padding?: string;
      focus?: {
        ring?: {
          width?: string;
          style?: string;
          color?: string;
          offset?: string;
          shadow?: string;
        };
      };
    };
    month?: {
      view?: {
        margin?: string;
      };
      padding?: string;
      border?: {
        radius?: string;
      };
    };
    year?: {
      view?: {
        margin?: string;
      };
      border?: {
        radius?: string;
      };
    };
    buttonbar?: {
      padding?: string;
      border?: {
        color?: string;
      };
    };
    time?: {
      picker?: {
        padding?: string;
        border?: {
          color?: string;
        };
        gap?: string;
        button?: {
          gap?: string;
        };
      };
    };
    today?: {
      background?: string;
      color?: string;
    };
  }

  export interface pInputTextTheme {
    background?: string;
    disabled?: {
      background?: string;
      color?: string;
    };
    filled?: {
      background?: string;
      hover?: {
        background?: string;
      };
      focus?: {
        background?: string;
      };
    };
    border?: {
      color?: string;
      radius?: string;
    };
    hover?: {
      border?: {
        color?: string;
      };
    };
    focus?: {
      border?: {
        color?: string;
      };
      ring?: {
        width?: string;
        style?: string;
        color?: string;
        offset?: string;
        shadow?: string;
      };
    };
    invalid?: {
      border?: {
        color?: string;
      };
      placeholder?: {
        color?: string;
      };
    };
    color?: string;
    placeholder?: {
      color?: string;
    };
    shadow?: string;
    padding?: {
      x?: string;
      y?: string;
    };
    transition?: {
      duration?: string;
    };
    sm?: {
      font?: {
        size?: string;
      };
      padding?: {
        x?: string;
        y?: string;
      };
    };
    lg?: {
      font?: {
        size?: string;
      };
      padding?: {
        x?: string;
        y?: string;
      };
    };
  }
  
  export interface pDrawerTheme {
    background?: string;
    color?: string;
    border?: {
      color?: string;
      radius?: string;
    };
    shadow?: string;
    header?: {
      padding?: string;
    };
    title?: {
      font?: {
        size?: string;
        weight?: string;
      };
    };
    content?: {
      padding?: string;
    };
  }