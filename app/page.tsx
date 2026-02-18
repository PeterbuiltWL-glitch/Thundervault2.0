export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Thundervault 2.0</h1>
      <p>This application is configured with Vercel Speed Insights.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Speed Insights Features</h2>
        <ul>
          <li>Real User Monitoring (RUM) for Core Web Vitals</li>
          <li>Automatic performance tracking</li>
          <li>Integration with Vercel Analytics dashboard</li>
          <li>No configuration required - works out of the box</li>
        </ul>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Next Steps</h2>
        <ol>
          <li>Enable Speed Insights in your Vercel project dashboard</li>
          <li>Deploy this application to Vercel</li>
          <li>Visit the Speed Insights tab to view performance metrics</li>
        </ol>
      </section>
    </main>
  );
}
