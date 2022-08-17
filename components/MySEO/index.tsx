import {NextSeo} from 'next-seo';

interface MySEOProps {
  page: string;
  description: string;
  path: string;
}

const MySEO = ({page, description, path}: MySEOProps) => {
  return (
    <>
      <meta
        name="color-scheme"
        content="dark light"
      />
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
          site_name: 'Faris Ashai',
        }}
      />
    </>
  );
};

export default MySEO;
