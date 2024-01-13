import { Lily_Script_One, Montserrat, Open_Sans } from 'next/font/google';

const fontSans = Open_Sans({
  weight: ['400', '500', '600', '800'],
  display: 'auto',
  subsets: ['latin', 'vietnamese'],
});

const logoFont = Lily_Script_One({
  weight: '400',
  display: 'auto',
  subsets: ['latin'],
});

const fonts = { fontSans, logoFont };
export default fonts;
