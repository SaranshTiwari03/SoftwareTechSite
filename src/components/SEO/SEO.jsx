import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { CompanyConfig, SiteConfig } from '../../theme/theme';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false,
}) => {
  const fullUrl = canonicalUrl ? `${SiteConfig.url}${canonicalUrl}` : SiteConfig.url;
  const imageUrl = ogImage || `${SiteConfig.url}${SiteConfig.ogImage}`;

  // Create full title with company name
  const fullTitle = title.includes(CompanyConfig.name) 
    ? title 
    : `${title} | ${CompanyConfig.name}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={CompanyConfig.name} />
      <meta property="og:locale" content={SiteConfig.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {SiteConfig.twitterHandle && (
        <meta name="twitter:site" content={SiteConfig.twitterHandle} />
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  structuredData: PropTypes.object,
  noindex: PropTypes.bool,
};

export default SEO;