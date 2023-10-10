import React from 'react'

const styles = {
  a: {
    color: '#1772d0',
    textDecoration: 'none',
  },
  aHover: {
    color: '#f09228',
    textDecoration: 'none',
  },
  body: {
    fontSize: '14px',
  },
  strong: {
    fontSize: '14px',
    fontWeight: '700',
  },
  h2: {
    margin: '0',
    fontWeight: 'normal',
    fontSize: '22px',
  },
  papertitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1772d0',
  },
  name: {
    paddingTop: '20px',
    margin: '0',
    fontSize: '32px',
  },
  one: {
    width: '160px',
    height: '160px',
    position: 'relative',
  },
  two: {
    width: '160px',
    height: '160px',
    position: 'absolute',
    transition: 'opacity .2s ease-in-out',
    MozTransition: 'opacity .2s ease-in-out',
    WebkitTransition: 'opacity .2s ease-in-out',
  },
  fade: {
    transition: 'opacity .2s ease-in-out',
    MozTransition: 'opacity .2s ease-in-out',
    WebkitTransition: 'opacity .2s ease-in-out',
  },
  highlight: {
    backgroundColor: '#ffffd0',
  },
}

function ResearchInfo() {
  return (
    <div style={{ display: 'none' }}>
      <h2 style={styles.h2}>Research</h2>
      <p style={styles.body}>
        Broadly I am interested in applied and theoretical machine learning. Some specific research
        interests are reinforcement learning, natural language processing, and the intersection of
        language models and reinforcement learning.
      </p>
    </div>
  )
}

function ProjectInfo(props) {
  const { title, authors, conference, links, description, video } = props

  return (
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={styles.body}>
      <div style={{ display: 'flex', alignItems: 'middle', padding: '20px' }}>
        <div style={{ padding: '20px', width: '75%', verticalAlign: 'middle' }}>
          <a href={props.projectLink}>
            <span className="papertitle" style={styles.papertitle}>
              {title}
            </span>
          </a>
          <br />
          {authors.map((author, index) => (
            <span key={index}>
              <a
                href={author.link}
                style={author.name == 'Justin Jung' ? styles.strong : styles.body}
              >
                {author.name}
              </a>
              {index < authors.length - 1 ? ', ' : ''}
            </span>
          ))}
          <br />
          <em>{conference}</em>
          <br />
          <p></p>
          <br />
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const publications = [
    {
      id: 'zipnerf_image',
      title: 'Subwords as Skills: Tokenization for Sparse-Reward Reinforcement Learning',
      authors: [
        { name: 'David Yunis' },
        { name: 'Justin Jung' },
        { name: 'Falcon Dai' },
        { name: 'Matthew Walter' },
      ],
      conference: 'ICLR, 2023 (In Submission)',
      projectLink: 'https://arxiv.org/abs/2309.04459',
      description:
        'A novel approach to skill-generation in sparse-reward reinforcement learning by discretizing the action space through clustering and leveraging tokenization techniques, which significantly outperforms existing methods in challenging domains while reducing computation requirements.',
    },
  ]
  const reports = [
    {
      id: 'zipnerf_image',
      title: 'Ensemble of Reinforcement Learned Agents for Stock Trading',
      authors: [{ name: 'Justin Jung' }, { name: 'Joey Farrell' }],
      conference: 'CMSC 35401: Machine Learning and Game Theory',
      projectLink: 'https://drive.google.com/file/d/1a1-lIpUjq50Z4uJPtIhHGSBI_z9r2B4z/view',
      description: 'An ensemble based strategy of reinforcement learned agents for stock trading.',
    },
    {
      id: 'zipnerf_image',
      title: 'Effects of Sunshine on Economic Productivity',
      authors: [{ name: 'Justin Jung' }, { name: 'Justin Jones' }, { name: 'Joey Farrell' }],
      conference: 'ECMA 31320: Data Science and Econometric Methods',
      projectLink: 'https://drive.google.com/file/d/11RN2o3S8mynGcfHAPQFv8MVmK3KqxGTJ/view',
      description:
        'Utilize IV and fixed effect models to measure the impact of sunshine levels on worker productivity.',
    },
  ]

  return (
    <div
      style={{
        width: '100%',
        border: '0px',
        borderSpacing: '0px',
        borderCollapse: 'separate',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <ResearchInfo />
      <br />
      <h2 style={styles.h2}>Publications</h2>
      {publications.map((project, index) => (
        <ProjectInfo key={index} {...project} />
      ))}
      <h2 style={styles.h2}>Reports</h2>
      {reports.map((project, index) => (
        <ProjectInfo key={index} {...project} />
      ))}
    </div>
  )
}

export default App
