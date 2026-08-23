import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout'], // Evita que Google indexe los carritos de pago directos
    },
    sitemap: 'https://impulsaweblatam.com/sitemap.xml',
  }
}
