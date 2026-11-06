import fund from '../data/fund.json';
import members from '../data/members.json';
import SectionHeader from '../components/SectionHeader.jsx';
import PaymentTable from '../components/PaymentTable.jsx';
import { formatMoney } from '../utils/format.js';

export default function FundPage() {
  const { balance, currency, events, payments } = fund;

  return (
    <section>
      <SectionHeader title="Money Fund" subtitle="Group balance and who has contributed" />

      <div className="card balance-card">
        <span className="balance-card__label">Remaining balance</span>
        <span className="balance-card__amount">{formatMoney(balance, currency)}</span>
      </div>

      <div className="card card--flush">
        <PaymentTable members={members} events={events} payments={payments} />
      </div>
    </section>
  );
}
