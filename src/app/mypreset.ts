import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { pTableTheme, pTabsTheme, pToastTheme, pDialogTheme, pDatepickerTheme, pInputTextTheme, pDrawerTheme   } from './themeTyping';
export const MyPreset = definePreset(Aura, {
  primitive: {
    tuna: {
      DEFAULT: '#37393E',
      50: '#F4F6F8',
      100: '#DDE0E6',
      200: '#C7CBD3',
      300: '#B1B5C1',
      400: '#9BA0AF',
      500: '#868C9E',
      600: '#71788D',
      700: '#5D657C',
      800: '#49526C',
      900: '#404555',
      950: '#37393E',
    },
    forge: {
      DEFAULT: '#34353E',
      50: '#F6F7F8',
      100: '#F0F1F2',
      200: '#E6E8EB',
      300: '#D5D9DE',
      400: '#B7BBC4',
      500: '#9B9EA8',
      600: '#82868F',
      700: '#676A75',
      800: '#50525C',
      900: '#34353E',
      950: '#232329',
    },
    gold: {
      DEFAULT: '#FEC32E',
      50: '#FFFAEE',
      100: '#FFF3D5',
      200: '#FFEAB6',
      300: '#FFE39D',
      400: '#FED97A',
      500: '#FECE55',
      600: '#FEC32E',
      700: '#C69302',
      800: '#906500',
      900: '#5F3A00',
      950: '#441E00',
    },
    green: {
      DEFAULT: '#00A6A6',
      50: '#F0FDFB',
      100: '#E3F9F7',
      200: '#C7EFED',
      300: '#A1E1DF',
      400: '#6ACDCC',
      500: '#2DB7B6',
      600: '#00A6A6',
      700: '#0D9890',
      800: '#007F6F',
      900: '#006056',
      950: '#01363D',
    },
    blue: {
      DEFAULT: '#0073E5',
      50: '#EEF8FB',
      100: '#DCF2F6',
      200: '#CBEBF2',
      300: '#A6D7EE',
      400: '#6FB6EB',
      500: '#3794E8',
      600: '#0073E5',
      700: '#005CCA',
      800: '#0047B0',
      900: '#003396',
      950: '#022175',
    },
    red: {
      DEFAULT: '#F9564F',
      50: '#FFEEEE',
      100: '#FED8D7',
      200: '#FDC1BF',
      300: '#FCAAA6',
      400: '#FB918D',
      500: '#FA7670',
      600: '#F9564F',
      700: '#C84A46',
      800: '#AE4441',
      900: '#7A3737',
      950: '#39272B',
    },
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    colorScheme: {
      default: 'light',
      light: {
        primary: {
          color: '{blue.600}',
          hoverColor: '{blue.700}', // {hw-blue.700}
          activeColor: '{blue.800}', // {hw-blue.800}
          inverseColor: '#ffffff',
        },
        highlight: {
          background: '{blue.50}',
        },
        surface: {
          0: '#ffffff',
          50: '{forge.50}',
          100: '{forge.100}',
          200: '{forge.200}',
          300: '{forge.300}',
          400: '{forge.400}',
          500: '{forge.500}',
          600: '{forge.600}',
          700: '{forge.700}',
          800: '{forge.800}',
          900: '{forge.900}',
          950: '{forge.950}',
        },
      },
    },
  },
  components: {
    tabs: {
      active: {
        bar: {
          height: '0px',
        },
      },
      tablist: {
        border: {
          width: '0px',
        },
      },
      tab: {
        padding: '0px',
        font: {
          weight: '500',
        },
        color: '{forge.700}',
        hover: {
          color: '{forge.900}',
          border: {
            color: '{forge.900}',
          },
        },
        border: {
          width: '0px 0px 2px',
        },
        margin: '0px',
      },
    } as pTabsTheme,
    toast: {
      width: '34rem',
    } as pToastTheme,
    datatable: {
      headerCell: {
        background: '{forge.50}',
        color: '{forge.900}',
        selected: {
          background: '{forge.50}',
        },
        padding: '13px 6px'
      },
      body: {
        cell: {
            padding: '13px 6px'
        }
      },
    } as pTableTheme,
    dialog: {
        color: '{forge.900}',
        header: {
            padding: '20px 24px'
        },
        title: {
            font: {
                size: '1.25rem',
                weight: '500',
            },
        },
        content: {
            padding: '0px 24px'
        },
        footer: {
            padding: '16px 24px 24px',
        },
    } as pDialogTheme,
    datepicker: {
      color: '{forge.900}',
    } as pDatepickerTheme,
    inputtext: {
        padding: {
            y: '0.4375rem',
            x: '0.4375rem',
        },
        border: {
            radius: '0.25rem',
        },
      } as pInputTextTheme,
      drawer: {
        color: '{forge.900}',
        header: {
          padding: '2.5rem 2.5rem 1.5rem',
        },
        content: {
          padding: '0px 2.5rem 1.5rem',
        },
        
        title: {
          font: {
            size: '1.5rem',
            weight: '500',
          }
        }
      }
    }
  }
);
