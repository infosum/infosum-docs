import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroContainer}>
        <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
          <img src='/infosum-docs/img/lines.svg' ></img>        
      </div> 
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout 
      title={`${siteConfig.title}`}
      description="">
      <HomepageHeader />
    </Layout>
  );
}
