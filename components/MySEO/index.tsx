import {NextSeo} from 'next-seo';

interface MySEOProps {
  page: string;
  description: string;
  path: string;
}

const MySEO = ({page, description, path}: MySEOProps) => (
  <NextSeo
    title={page}
    titleTemplate="Faris Ashai | %s"
    defaultTitle="Faris Ashai"
    description={description}
    canonical={`https://www.farisashai.me${path}`}
    openGraph={{
      url: `https://www.farisashai.me${path}`,
      title: `Faris Ashai | ${page}`,
      description: description,
      images: [
        {
          url: 'https://media.discordapp.net/attachments/800962580041433088/1157198139221102592/IMG_1157.png?ex=6517bc40&is=65166ac0&hm=b3cfd9cb719ed22351220c9c3b8c441d7ddcfdbdadd5e16f55f6e219cf2643e4&=',
        },
      ],
      site_name: 'Faris Ashai',
    }}
  />
);

export default MySEO;
