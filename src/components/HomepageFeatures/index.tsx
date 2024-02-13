import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'API Reference',
    Svg: require('@site/static/img/icon_api.svg').default,
    description: (
      <>
        You can get started with our <Link href='/api/v2'>API Reference</Link>
      </>
    ),
  },
  // {
  //   title: 'Quick Start',
  //   Svg: require('@site/static/img/icon_quick-start.svg').default,
  //   description: (
  //     <>
  //       If you are new to the <Link href='https://www.infosum.com'>InfoSum Platform</Link> you can use our <Link href='/docs/getting-started' >getting started guides.</Link>
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
