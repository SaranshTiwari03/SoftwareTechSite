const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    megaMenu: {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop',
      columns: [
        // ACTIVE SERVICE 1: Mobile App Development (iOS removed)
        { 
          heading: 'Mobile App Development', 
          path: '/services/mobile-app', 
          links: [
            // { label: 'iOS App Development', path: '/services/mobile-app/ios' }, // COMMENTED - Future use
            { label: 'Android App Development', path: '/services/mobile-app/android' },
            { label: 'Cross Platform App Development', path: '/services/mobile-app/cross-platform' }
          ]
        },
        
        // COMMENTED OUT - Future use
        // { 
        //   heading: 'Game Development', 
        //   path: '/services/game', 
        //   links: [
        //     { label: '2D Game Development', path: '/services/game/2d' },
        //     { label: '3D Game Development', path: '/services/game/3d' },
        //     { label: 'Web3 Game Development', path: '/services/game/web3' }
        //   ]
        // },
        
        // COMMENTED OUT - Future use
        // { 
        //   heading: 'Staff Augmentation', 
        //   path: '/services/staff', 
        //   links: [
        //     { label: 'Hire Android App Developer', path: '/services/staff/android' },
        //     { label: 'Hire IOS App Developer', path: '/services/staff/ios' },
        //     { label: 'Hire NodeJs Developer', path: '/services/staff/nodejs' }
        //   ]
        // },
        
        // ACTIVE SERVICE 2: Custom Software Development
        { 
          heading: 'Custom Software Development', 
          path: '/services/custom-software', 
          links: [
            { label: 'CRM Solution', path: '/services/custom-software/crm' },
            { label: 'ERP Solution', path: '/services/custom-software/erp' },
            { label: 'CMS Solution', path: '/services/custom-software/cms' }
          ]
        },
        
        // COMMENTED OUT - Future use
        // { 
        //   heading: 'Artificial Intelligence', 
        //   path: '/services/ai', 
        //   links: [
        //     { label: 'Generative AI', path: '/services/ai/generative' },
        //     { label: 'Natural Language Processing', path: '/services/ai/nlp' },
        //     { label: 'AI Agent Development', path: '/services/ai/agent' }
        //   ]
        // },
        
        // COMMENTED OUT - Future use
        // { 
        //   heading: 'Blockchain Development', 
        //   path: '/services/blockchain', 
        //   links: [
        //     { label: 'Metaverse Development', path: '/services/blockchain/metaverse' },
        //     { label: 'NFT Development', path: '/services/blockchain/nft' }
        //   ]
        // },
        
        // ACTIVE SERVICE 3: Web Development
        { 
          heading: 'Web Development', 
          path: '/services/web', 
          links: [
            { label: 'Ecommerce Website Development', path: '/services/web/ecommerce' },
            { label: 'Web Portals', path: '/services/web/portals' }
          ]
        },
        
        // ACTIVE SERVICE 4: Cloud Services
        { 
          heading: 'Cloud Services', 
          path: '/services/cloud', 
          links: [
            { label: 'Cloud Application Development', path: '/services/cloud/app-development' },
            { label: 'Cloud Migration Services', path: '/services/cloud/migration' },
            { label: 'Cloud Support & Maintenance', path: '/services/cloud/support' }
          ]
        },
        
        // ACTIVE SERVICE 5: Digital Marketing Services
        { 
          heading: 'Digital Marketing Services', 
          path: '/services/marketing', 
          links: [
            { label: 'Social Media Marketing', path: '/services/marketing/social-media' },
            { label: 'Search Engine Marketing', path: '/services/marketing/sem' },
            { label: 'Search Engine Optimization', path: '/services/marketing/seo' }
          ]
        }
      ]
    }
  },
  {
    label: 'Industries',
    path: '/industries',
    megaMenu: {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop',
      columns: [
        { heading: 'Automotive', desc: 'Transforming automotive industry with bespoke tech.', path: '/industries/automotive' },
        { heading: 'Education', desc: 'Enhancing education with new-age EdTech.', path: '/industries/education' },
        { heading: 'Real Estate', desc: 'Innovating real estate with custom tech.', path: '/industries/real-estate' },
        { heading: 'Logistics', desc: 'Optimizing logistics with intelligent tech.', path: '/industries/logistics' },
        { heading: 'Healthcare', desc: 'Accessible healthcare through tailored tech solutions.', path: '/industries/healthcare' },
        { heading: 'Music', desc: 'Advancing music industry with digital innovations.', path: '/industries/music' },
        { heading: 'SAAS', desc: 'Developing custom solutions for SAAS platforms.', path: '/industries/saas' },
        { heading: 'Retail', desc: 'Scaling retail businesses through advanced technology.', path: '/industries/retail' },
        { heading: 'On-Demand', desc: 'Elevating on-demand services with innovative tech.', path: '/industries/on-demand' },
        { heading: 'ECommerce', desc: 'Driving e-commerce growth with smart tech.', path: '/industries/ecommerce' },
        { heading: 'Fintech', desc: 'Empowering fintech with specialized tech services.', path: '/industries/fintech' }
      ]
    }
  },
  {
    label: 'Technologies',
    path: '/technologies',
    megaMenu: {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop',
      columns: [
        { heading: 'Languages', path: '/technologies', links: [
          { label: '.Net', path: '/technologies/dotnet' },
          { label: 'HTML5', path: '/technologies/html5' },
          { label: 'Java', path: '/technologies/java' },
          { label: 'Node.Js', path: '/technologies/nodejs' },
          { label: 'PHP', path: '/technologies/php' },
          { label: 'Python', path: '/technologies/python' }
        ]},
        { heading: 'Platforms', path: '/technologies', links: [
          { label: 'Azure', path: '/technologies/azure' },
          { label: 'GCP', path: '/technologies/gcp' },
          { label: 'Oracle', path: '/technologies/oracle' },
          { label: 'SAP', path: '/technologies/sap' }
        ]}
      ]
    }
  },
  { label: 'Insights', path: '/insights' },
  // COMMENTED OUT - Future use
  // { label: 'Portfolio', path: '/portfolio' }
];

export default navItems;