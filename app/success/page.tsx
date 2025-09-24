export default function SuccessPage() {
  return (
    <main style={{maxWidth: 720, margin: "60px auto", padding: "0 20px", lineHeight: 1.6}}>
      <h1 style={{fontSize: 28, fontWeight: 800}}>
        You’re in. We’re activating your TradingView access.
      </h1>
      <p style={{marginTop: 12}}>
        Thanks for subscribing to <b>ChartPsyched – Pro Indicator</b>. 
        We’ll grant your TradingView access <b>within 12 hours</b> 
        using the username you entered at checkout.
      </p>
      <h2 style={{marginTop: 24, fontWeight: 700}}>What happens next (2 steps)</h2>
      <ol>
        <li><b>Wait for access</b> — We add your ID to our invite-only script list (lock icon).</li>
        <li><b>Find it in TradingView</b> — TradingView → <i>Indicators</i> → <b>Invite-only scripts</b>.</li>
      </ol>
      <h3 style={{marginTop: 24, fontWeight: 700}}>Need it faster?</h3>
      <p>Reply to your Stripe receipt with “EXPEDITE” and your TradingView username.</p>
      <h3 style={{marginTop: 24, fontWeight: 700}}>Having trouble?</h3>
      <ul>
        <li>“Invite-only scripts” tab appears only after access is granted.</li>
        <li>Wrong username? Email <a href="mailto:support@yourdomain.com">support@yourdomain.com</a></li>
      </ul>
      <p style={{marginTop: 24, opacity: .7, fontSize: 14}}>
        Educational tool only. No investment advice or guaranteed performance.
      </p>
      <p><a href="https://www.tradingview.com/chart/" target="_blank">Open TradingView</a></p>
    </main>
  );
}
