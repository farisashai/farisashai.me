import {NextSeo} from 'next-seo';

interface MySEOProps {
  page: string;
  description: string;
}

const MySEO = ({page, description}: MySEOProps) => {
  return (
    <NextSeo
      title={page}
      titleTemplate="Faris Ashai | %s"
      defaultTitle="Faris Ashai"
      description={description}
      canonical="https://www.farisashai.me/"
      openGraph={{
        url: 'https://www.farisashai.me/',
        title: `Faris Ashai | ${page}`,
        description: description,
        site_name: 'Faris Ashai',
      }}
    />
  );
};

export default MySEO;
