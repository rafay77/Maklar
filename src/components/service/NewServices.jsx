import React from 'react';
import styles from './NewServices.module.css';

const BeautyServicesShowcase = () => {
  return (
    <div className={styles['services-container']}>
      <div className={styles['services-left']}>
        {leftServices.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className={styles['service-item']}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['service-number']}>{service.number}</div>
            <div className={styles['service-separator']}></div>
            <div className={styles['service-text']}>{service.text}</div>
          </a>
        ))}
      </div>

      <div className={styles['phone-container']}>
        {/* <img src="/assets/imgs/service/phone_content.jpg" alt="Phone Content" className={styles['content-image']} /> */}
        <div className={styles['phone-frame']}></div>
      </div>

      <div className={styles['services-right']}>
        {rightServices.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className={styles['service-item']}
             target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['service-number']}>{service.number}</div>
            <div className={styles['service-separator']}></div>
            <div className={styles['service-text']}>{service.text}</div>
          </a>
        ))}
      </div>

      {/* Mobile version of services list */}
      <div className={styles['services-mobile']}>
        {[...leftServices, ...rightServices].map((service, index) => (
          <a
            key={index}
            href={service.link}
            className={styles['service-item']}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['service-number']}>{service.number}</div>
            <div className={styles['service-separator']}></div>
            <div className={styles['service-text']}>{service.text}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

const leftServices = [
  { number: '01', text: 'BRANDING', link: '/service-v4#branding' },
  { number: '02', text: 'PERFORMANCE MARKETING', link: '/service-v4#performance' },
  { number: '03', text: 'SOCIAL MEDIA MANAGEMENT', link: '/service-v4#SM' },
  { number: '04', text: 'CONTENT CREATION', link: '/service-v4#content' },
];

const rightServices = [
  { number: '05', text: 'WEBSITE DEVELOPMENT', link: '/service-v4#web' },
  { number: '06', text: 'E-COMMERCE MANAGEMENT', link: '/service-v4#ecom' },
  { number: '07', text: 'INFLUENCER MARKETING', link: '/service-v4#influencer' },
  { number: '08', text: 'PACKAGING & DESIGN', link: '/service-v4#packaging' },
];

export default BeautyServicesShowcase;
