export function Intro() {
  return (
    <div
      css={{
        margin: '150px auto 100px auto',
        padding: '15px',
        '*': {
          textAlign: 'left'
        },
        maxWidth: '570px'
      }}
    >
      <h1 css={{ background: 'linear-gradient(rgba(255, 255, 255, 0.87), rgb(133, 133, 133)) text' }}>
        Your Guide to Selecting the Ideal PaaS
      </h1>
      <p css={{ fontSize: '1rem', marginTop: '30px' }}>
        PaaScout compares modern Platform as a Service providers using over 40 criteria, so you can choose the one that
        works best for you.
      </p>
    </div>
  );
}
