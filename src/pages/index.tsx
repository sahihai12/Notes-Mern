import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import bgImage from '../../static/img/image-bg.png';
import leetcode from '../../static/img/leetcode.png';
import github from '../../static/img/github.png';
import codepen from '../../static/img/codepen.png';
import linkedIn from '../../static/img/linkedin.png';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="wrap-align">
            <Heading as="h1" className="hero__title">
              Hi! I<span className='p-color'>'m</span> Sahil
            </Heading>
            <p className="hero__subtitle">
              Results-driven Software Engineer with 4+ years of experience specializing in the <b className='p-color'>MERN</b> stack (MongoDB, Express.js, React, Node.js). Proven track record in designing, developing, and deploying scalable web applications across eCommerce, learning management, and trip planning domains. Adept at leading frontend teams, building RESTful APIs, and optimizing performance. Skilled in handling full-stack development, database management, and cloud infrastructure (AWS).
            </p>
            <ul>
              <li><Link
                className=""
                to="https://github.com/sahihai12">
                <img src={github} alt="" />
              </Link></li>
              <li><Link
                className=""
                to="https://www.linkedin.com/in/sahil-prajapati-7b8176177/">
                <img src={linkedIn} alt="" />
              </Link></li>
              <li><Link
                className=""
                to="https://leetcode.com/u/Sahil201201/">
                <img src={leetcode} alt="" />
              </Link></li>
              <li><Link
                className=""
                to="https://codepen.io/sahihai12">
                <img src={codepen} alt="" />
              </Link></li>
            </ul>
            {/* <Link
              className="btn-goto"
              to="https://sahihai12.github.io/portfolio/">
                My Portfolio 
            </Link> */}
          </div>
          </div>
          <div className="col-md-6">
            <img src={bgImage} alt="" className='img-fluid'/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
